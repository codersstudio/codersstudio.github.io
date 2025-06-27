---
outline: deep
---

# 데이터 타입
Jssp 언어 문법은 Javascript, Dart 언어 문법과 비슷하지만 여러가지 타입을 추가로 제공합니다. 코더스는 각 타입에 따라 플랫폼에 맞는 타입으로 변환하며, 코드를 좀 더 간결하게 하는 장점이 있습니다.


## Bool 타입

### bool 타입
true, false 값을 저장하는 타입입니다.
```dart
var success = true;
```

## Number 타입

### int32, int64 타입
정수 타입입니다. int32 는 대부분의 언어가 32비트로 저장되는 정수 타입입니다. int64 타입은 64비트로 저장되는 정수 타입입니다. int64 타입은 Java, C++, C# 언어는 long으로 변환됩니다. Javascript, Dart 언어는 Number, int 로 각각 변환됩니다.

### float, double 타입
float, double 타입은 부동소수점을 숫자를 다루는 타입입니다. 대부분의 언어가 float 32비트, double 64비트를 채용하고 있습니다. Dart 언어에서는 double 으로만 변환됩니다. 숫자가 소수점을 포함하면 double 로 인식합니다. float 로 선언하기 위해서는 명시적으로 float 를 사용해야 합니다.

```dart
var x = 3.14;
var y float = 3.14;
```

## 문자열 타입
### string 타입
string 타입은 "" 나 '' 로 둘러쌓인 문자열 입니다. string 은 대부분 언어에서 문자열로 변환됩니다. `` 로 시작하는 문자열은 문자열 내 변수를 사용할 수 있는 템플릿 문자열입니다.

### template string 타입
`` 로 시작하는 문자열은 여러 라인에 걸쳐 작성할 수 있습니다. 또한 언어마다 string 보간을 지원하는 언어는 그에 맞게 변환이 됩니다.

```dart
var name = "typark";
@console.log(name);

var x = `$name`;
```
위 코드에서 `` 안의 값이 평가되어 각 플랫폼에 맞게 변환됩니다. Dart 언어에서는 `x = "$name"` 으로 변환되고 Java에서는 `x = String.format("%s", name);` 으로 변환됩니다.

## 파일 타입
### file 타입
### formfile 타입
코더스에서는 formfile 이라는 독특한 타입을 제공합니다. 이 타입은 API에서 파일을 업로드 하기 위해 사용하는 타입입니다. 임시 파일이 생성되고 handler 에 전달된 후 임시 파일이 삭제되도록 코드가 생성됩니다.

```dart
define opcode[controller=Api, baseUrl='/api/v1'] {
  [method=post, action='profile']
  uploadProfile 100 'upload profile'
}

req uploadProfile {
  [required, comment='Nickname']
  nickname string;

  [required, comment='Avatar image']
  avatarImage formfile;
}

res uploadProfile {
  ...
}

handler uploadProfile {
  ...
}
```

## 컨테이너 타입
### list\<T\> 타입
list&lt;T&gt; 타입은 제너릭 리스트 타입입니다. 리스트 타입은 여러개의 값을 저장할 수 있는 컨테이너 입니다. 
```dart
var x list<int32> = [];
var y = [];

var l = x.length;
for(var i = 0; i < x.length; ++i) {
  var n = x[i];
}
```

### map\<K,V\> 타입
map&lt;K,V&gt; 타입은 키-값 쌍을 저장할 수 있는 제너릭 컨테이너 입니다. map 은 특정 키에 해당하는 값을 저장하거나 빠르게 조회할때 쓰입니다.
```dart
  var x map<int32, string> = {};
  x.add(10, "hello");
  var str = x[10];
```

### set\<V\> 타입

## 비동기 타입
### future 타입

## SQL 데이터 타입
### bigint 타입
### integer 타입
### varchar(n) 타입
### datetime 타입
### text 타입

## 함수 타입

## domain 타입
domain 은 데이터베이스 에서 사용되는 개념으로, 데이터 타입을 정의하고 일관되게 컬럼 타입을 유지하기 위해 사용합니다.
```dart
[comment='닉네임 타입']
domain Nickname varchar(32);

[comment='사용자 아이디']
domain UserID bigint;

table User {
  user_id UserID;
  nickname Nickname = "";
  key(user_id);
}
```

위 코드에서처럼 domain Nickname은 타입을 가변 길이 문자열 32자리까지 정의합니다. 이 도메인은 프로그래밍 언어로 변환될 수 있으므로 아래 코드처럼 여러 구문에서도 사용할 수 있습니다.

```dart
struct UserInfo {
  userId UserID;
  nickname Nickname;
}
```

```dart
entity UserVo {
  userId UserID;
  nickname Nickname;
}

[service=User]
query selectUser(userId UserID) UserVo {
  select user_id as userId, nickname
  from user
  where userId = :userId;
}
```


## 클래스 타입
### entity 타입
entity 타입은 데이터베이스 쿼리로 조회되는 데이터를 저장하기 위한 객체입니다.

```dart
entity UserVo {
  userId varchar(32);
  nickname varchar(68);
  email varchar(128);
  password varchar(128);
}

[service=User]
query selectUser(email varchar(128)) UserVo {
  select user_id as userId,
    nickname as nickname,
    email as email
  from user
  where email = :email;
}
```

entity UserVo 는 사용자 아이디, 닉네임, 이메일, 패스워드로 이루어져 있습니다. 사용자를 조회한 결과 데이터가 UserVo
에 저장됩니다. entity 타입은 백엔드 에서만 사용되고 프론트엔드 에서는 사용되지 않습니다. 

```dart
struct UserInfo {
  userId string;
  nickname string;
  email string;
}
```
struct UserInfo 객체는 프론트엔드에 전달되기 위한 객체입니다. entity UserVo, struct UserInfo가 사용자 정보를 담고 있는 객체들입니다.
이 객체는 entity 객체로부터 복사가 되어야 합니다. 코더스는 이름 기반으로 복사하는 setter 함수를 작성해 줍니다.

```dart
var userInfo = UserInfo();
var vo = UserVo();

userInfo.set(vo);
```

`userInfo.set(vo)` 코드는 코더스가 자동으로 복사하는 코드를 작성해 줍니다.

### class 타입
class 타입은 대부분 언어에서 채용하고 있는 키워드 입니다. 데이터를 저장하기 위한 자료구조와 메소드들을 담고 있습니다.

```dart
[path="classes/DateUtil"]
class DateUtl {
  func toString(unixTime int64) string {
    var str = "";
    ...
    ...
    return str;
  }
}
```
DateUtil class 를 정의하고 있습니다. 코더스는 코드가 변환되어야 하므로 path 속성을 지정해 주어야 합니다. 코더스는 path 경로에 DateUtil 클래스를 작성해 줍니다.

### handler 타입
handler 타입은 백엔드 비즈니스 로직을 작성할 수 있는 클래스입니다. API 요청을 통해 전달된 파라미터와 세션 정보등을 처리하는 클래스입니다.

```dart
struct UserInfo {}

define opcode[Controller=Api, baseUrl='/api/v1'] {
  [method=get, action='user', auth]
  getUser 100 'get user information'
}

req getUser {
  nickname string;
}

res getUser {
  info UserInfo;
}

handler getUser {
  func execute(user @user, header @header, req @req) (res @res) {
    if(user == null) {
      res.code = @error.Unauthorized;
      return;
    }
    if(!req.invalid()) {
      res.code = @error.InvalidParams;
      return;
    }

    var userId = user.userId;
    var cntryCode = header.cntryCode;
    var nickname = req.nickname;

    ...

    res.code = 0;
    return;
  }
}
```

handler 클래스는 opcode 에서 정의된 정보를 기반으로 코드를 생성해 줍니다.

### html 타입
html 타입은 프론트엔드 에서 사용되는 화면 클래스입니다. Vue, React 플랫폼을 설정하면 html 타입은 화면으로 변환됩니다.

```dart
@vuejs[path='views/auth']
html LoginView {
  ref var email string;
  ref var password string;

  <template>
    <div>
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
    </div>
  </template>
}
```

위 코드는 Vue 플랫폼 Composition API 스타일로 변경되고, React 플랫폼 Function Hook 방식으로 변경됩니다.

### widget 타입
widget 타입은 프론트엔드 플러터 를 위한 키워드입니다. 플러터는 Android, iOS, Web, Desktop 등 하나의 코드로 모두 빌드할 수 있는 막강한 플랫폼입이다. 

```dart
[path="lib/pages/auth", stateful]
widget LoginPage {

  func initState() {
  }

  func build(context BuildContext) widget {
    return Scaffold {
      title: AppBar("Login");
      body: Container {
        Column {
          Row {
            Text('email:');
            TextField {
              ...
            }
          }
        }
      }
    }
  }
}
```
코더스에서 제공하는 문법은 Flutter 작성 방식과 조금 다릅니다. 코더스에서는 child, children을 제거하여 들여쓰기를 한 단계 줄였습니다. 소문자로 시작하는 것은 속성이고, 대문자로 시작하는 것은 widget 클래스입니다. 또한 콤마를 없애고 ';' 세미콜론으로 문장이 끝날 수 있도록 하였습니다. Scaffold, Container, AppBar 등 flutter widget 클래스들은 코더스가 flutter interface를 미리 정의하여 제공합니다. extern 키워드로 flutter widget 클래스들을 확장할 수 있습니다.

### service 타입
service 타입은 백엔드에서 트랜잭션이 가능한 클래스입니다. 백엔드에서 데이터베이스의 쿼리가 2개 이상 사용되고 이를 하나의 트랜잭션으로 다루어야 할 때 service 타입을 사용합니다.

```dart
table user {
  user_id bigint;
  nickname varchar(32);
  key(user_id);
}

table user_item {
  user_id bigint;
  items integer;
  key(user_id);
}

entity UserVo {
  userId bigint;
  nickname varchar(32);
}

query insertUser(userId bigint, nickname varchar(32)) UserVo {
  insert into user(user_id, nickname)
  values(:userId, :nickname);
}

query insertUserItem(userId bigint, item integer) integer {
  insert into user_item(user_id, items) values(:userId, :item);
}

service UserService {
  func createUser(userId bigint, nickname string, items int32) integer {
    var n = @query.insertUser(userId, nickname);
    n += @query.insertUserItem(userId, items);
    return n;
  }
}
```

위와 같이 UserService 클래스의 createUser 함수는 트랜잭션으로 다루어져 insertUser, insertUserItem이 모두 성공하거나 모두 실패하도록 변환이 됩니다.

### batch 타입
batch 타입은 스케쥴링이 가능한 클래스로 변환이 됩니다. 백엔드에서 주기적으로 실행되어야 하는 경우 사용합니다.

```dart
batch NotifyBatch {
  [autowired]
  var awsConfig AwsConfig;

  [autowired]
  var sqsClient AmazonSQS;

  [fixedRate=1000]
  func pollMessage() {
    @console.log('poll message ..');
  }

  [cron="* * * * * *"]
  func sample() {
    ...
  }
}
```

위 코드는 1초마다 실행하는 배치 클래스를 보여줍니다.
