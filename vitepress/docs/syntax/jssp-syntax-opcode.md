---
outline: deep
---

# Opcode
코더스는 API 설계와 구현을 지원합니다. 요청 및 응답 데이터 구조와 백엔드 Controller 로직을 작성하면, 코더스가 이를 다양한 플랫폼 코드로 변환합니다. 복잡한 플랫폼별 구현을 대신 처리하여 개발자는 비즈니스 로직에만 집중할 수 있습니다. 또한 opcode를 정의하면 클라이언트 측에서 websocket 으로 전송하여 handler 클래스를 재사용 할 수 있게 합니다.

## API 예시
```dart
interface @auth {
  var userId string;
}
interface @header {
  cntryCode string;
  langCode string;
}

define error[locale='en', default=true] {
  Success 0 'success';
  Failed 1 'failed';
  Unauthorized 2 'unauthorized';
  InvalidParams 3 'invalid params';
}

domain Nickname varchar(128);

struct UserInfo {
  userId bigint;
  email string;
  nickname Nickname;
}

define opcode[controller=User, baseUrl='/api/v1/user'] {
  [method=get, action='profile', auth]
  getProfile 100 'get user profile'
}

req getProfile {
}

res getProfile {
  usserInfo UserInfo;
}

handler getProfile {
  func execute(user @auth, header @header, req @req) (res @res) {
    if(user == null) {
      res.code = @error.Unauthorized;
      return;
    }

    if(req.invalid()) {
      res.code = @error.InvalidParams;
      return;
    }

    var userId = user.userId;

    res.userInfo = UserInfo();
    res.userInfo.nickname = 'Jhon';

    res.code = @error.Success;
    return;
  }
}
```
위 코드는 사용자 프로필 정보를 가져오는 완전한 예시입니다. API를 서비스하는 백엔드 프레임워크들은 컨트롤러라고 하는 구현부에 로직을 작성합니다. 코더스는 handler라는 개념의 클래스를 도입하여 로직을 작성할 수 있으며 기타 복잡한 파라미터, 인증 등은 코더스가 자동으로 생성합니다. 


## Opcode 정의
opcode 는 API 목록과 method 방식, router path, 인증여부 등을 정의합니다.
```dart
define opcode[controller=User, baseUrl='/api/v1/user'] {
  [method=get, action='profile', auth]
  getProfile 100 'get user profile'
}
```
### controller 속성
코더스는 controller 속성의 값으로 클래스를 생성합니다. 위 예시에서는 `UserController` 가 됩니다. 이 클래스에 handler가 연결되도록 코드를 생성합니다.

### baseUrl 속성
baseUrl 속성은 컨트롤러 각 항목의 action 과 결합하여 router를 생성할 때 root path 입니다.
위 예시에서 getProfile은 `/api/v1/user/profile` 가 됩니다.


## Router 정의
opcode 컨트롤러의 각 항목을 정의 합니다.
```dart
  [method=get, action='profile', auth]
  getProfile 100 'get user profile'
```
위와 같이 method, action, auth, noauth 등의 속성을 사용할 수 있으며 이름, 번호, 설명 으로 작성합니다.
번호는 opcode가 websocket 이나 grpc 로 전송할 때 사용 됩니다.

> 번호는 고유해야 하며 websocket, grpc 에서 식별자로 사용됩니다.

### method 속성
method 속성은 get, post, delete, put 속성중에 하나가 됩니다.

### auth, noauth 속성
getProfile API는 OAuth2 인증이 필요합니다. API의 속성 정보에 auth 가 추가되었습니다. auth=false 와 noauth 는 같은 의미입니다. 

handler 에는 로직을 작성합니다. 파라미터는 @auth, @header, @req 이고 응답으로는 @res 를 리턴합니다. 코더스는 각 플랫폼마다 GetProfileHandler 클래스를 만들고 플랫폼마다 고유한 Controller 코드에 통합합니다. 

@auth:  AuthUser 클래스로 변환되며, 사용자의 인증 정보를 담고 있습니다. 이 클래스의 인터페이스를 또한 정의할 수 있습니다. 로그인시 userId를 Bearer 토큰에 암호화 하여 담고 있는 값입니다.
  
@header: HttpHeader 클래스로 변환됩니다. 이 클래스의 인터페이스에는 cntryCode 국가 코드 langCode 언어 코드가 있습니다. Header 의 속성은 프로젝트마다 달라질 수 있기 때문에 인터페이스로 정의하고 있습니다. 에러코드의 i18n을 지원하기 위해 코더스에서는 **cntryCode**, **langCode**를 사용하고 있습니다.

@req: GetProfileRequest 클래스로 변환됩니다.
@res: GetProfileResponse 클래스로 변환됩니다.

코더스는 request 클래스에 invalid() 함수를 자동으로 삽입합니다. 요청시 전송하는 데이터의 유효성을 체크하는 함수입니다.

```dart
...
req findUser {
  [required=true, comment='nickname']
  nickname string;
}
...
```
findUser 요청은 nickname 값을 가지고 있으며 nickname 값은 필수 값이 되어야 합니다. 
```dart
handler findUser {
  func execute(user @auth, header @header, req @req) (res @res) {
    if(req.invalid()) {
      res.code = @error.InvalidParams;
      return;
    }
    ...
  }
}
```
nickname 값이 비어 있으면 invalid() 는 true를 리턴하게 됩니다.
만약 required=false 로 한다면 invalid함수에서 nickname을 체크하지 않습니다.


## Request 정의
`req` 키워드는 API 에서 요청시 전송하는 데이터를 정의할때 사용합니다. 
```dart
req login {
  [required, comment='User email']
  email string;

  [required, comment='User password']
  password string;

  [comment='device type']
  deviceType int32?;
}
```
위의 예시는 login 요청 데이터를 보여줍니다.

### required 옵션
위의 예시는 email, password 값은 필수 값이고 deviceType 은 optional 입니다. deviceType 타입은 nullable 타입으로 nullable 타입을 지원하는 dart 는 int? 타입으로 변환되면 java 는 Integer 객체 타입으로 변환됩니다. 

### comment 옵션
코더스가 word 문서, OpenAPI 문서 생성시 필드 설명 문구로 사용됩니다.

### 파일 전송
```dart
req uploadProfile {
  [required, comment='user profile image']
  image formfile;
}
```

위와 같이 formfile 타입을 사용하면 이미지를 전송할 수 있습니다. formfile은 웹 브라우저에 내장되어 있는 타입입니다. 코더스는 자동으로 'multipart form data' 요청으로 파일을 handler에 전달하도록 생성합니다.

### path 파라미터

```dart
define opcode [...] {
  ...
  [method=get, action='profile/{filename}']
  getProfileImage
  ...
}

req getProfileImage {
  [path="filename"]
  filename string;
}
...
```
위와 같이 url 경로에 파라미터로 전달되는 경우 path 속성을 사용합니다. 코더스는 이를 인식하여 일치하지 않으면 에러를 발생시킵니다.

### 파일 다운로드

## Response 정의
응답 데이터는 API 에서 클라이언트 측으로 전송하는 데이터 구조입니다. 
```dart
[comment='User information']
struct UserInfo {
  [comment='User email']
  email string;

  [comment='User nickname']
  nickname string;
}

res login {
  [comment='Access token']
  accessToken string;

  [comment='User info']
  userInfo UserInfo;
}
```
위 예시는 login 응답으로 accessToken 과 userInfo 객체를 응답하고 있습니다.

## Handler 정의
