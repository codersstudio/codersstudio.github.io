---
outline: deep
---

# @ 문법

@ 기호는 코더스에서 리소스를 찾아가기 위해 사용됩니다. 가령 `@struct.UserInfo` 는 struct UserInfo 타입을 의미합니다.

```dart
handler login {
    func execute(user @auth, req @req) (res @res) {
        ...
    }
}
```
위 코드에서 @auth 는 AuthUser 클래스를 의미하고, @req 는 LoginRequest 클래스를 의미합니다. 
@ 기호는 리소스를 식별할 뿐만 아니라 문맥에 맞는 타입을 의미하기도 합니다.

```dart
service UserService {
    func saveUser(email string, nickname string) int32 {
        ...
    }
}

var n = @service.UserService.saveUser('email', 'nickname');

enum UserType {
    Guest 1;
    Admin 2;
}

var userType = @enum.UserType.Guest;

var n = @error.Unauthorized;
var x = @constant.UserTypeGuest;
...
```

위에서 처럼 각 Symbol 들이 어떤 타입인지 명확히 이해할 수 있습니다.

```dart
var req = @req.login();
req.email = 'sample@sample.com';
req.nickname = 'sample';
@api.send(req);
...
```
위 코드는 프론트엔드측 코드입니다. @req.login 은 LoginRequest 클래스를 의미합니다.
@api.send 는 서버에 요청을 보내는 코드로 변환이 됩니다.

## @ 목록

### @req, @res
@req, @res 는 API handler 클래스에서 요청 클래스와, 응답 클래스로 변환됩니다.
```dart
define opcode[controller=Api, baseUrl='/api/v1'] {
    ...
    [method=post, action='login']
    login 100 'login'
}

req login {
    [required, comment='user email']
    email string;
}

res login {
    ...
}

handler login {
    func execute(req @req) (res @res) {
        ...
    }
}
```
위의 코드에서 @req, @res 는 LoginRequest, LoginResponse 코드로 각각 변환됩니다.
클라이언트측 코드에서는 
```dart
var req = @req.login();
var res = @api.send(req);
```
@req.login 은 LoginRequest 클래스로 변환됩니다.

### @constant
### @enum
### @class
### @service
### @auth
### @header
### @query
### @api
### @router
### @store



