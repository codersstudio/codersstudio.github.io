---
outline: deep
---

# 기본 문법
Jssp 언어는 Javascript, Dart 언어 문법과 비슷하며 여러가지 키워드를 제공합니다.
[데이터 타입](jssp-syntax-datatype)에서 살펴보았듯이 코더스는 타입을 제공하여
코드를 명확하게 하고 간결하게 작성할 수 있습니다.

## 변수 정의
변수는 `var` 키워드를 사용하여 정의합니다. 타입을 명시하지 않은 경우,
초기값에 따라 타입이 추론됩니다.

```dart
var x = 10; // int32 타입으로 추론됩니다.
var y int64 = 10; // int64 타입입니다.
var a int32? = null;
```

### nullable 변수
코더스는 nullable 타입을 지원합니다. nullable 타입이란 null 값을 가질 수 있는 타입을 의미합니다.
```dart
var x int32? = null;
var y = x!;
```
`x`는 int32 타입이지만, null을 할당할 수 있습니다. Dart 언어는 nullable을 지원하는 언어입니다.
Java의 경우, 코더스는 `x`를 Integer 타입으로 변환하여 null 할당이 가능하도록 합니다.
`x!` 구문은 x가 null이 아닌 경우에만 사용해야 하며, 그렇지 않으면 문제가 발생할 수 있습니다.

### class 변수
```dart
class User {
  ...
}
var user = User();
```

## enum
코더스는 열거형 상수를 지원합니다. 열거형 상수란 특정 값들의 집합을 의미하며,
이 값들은 이름이 부여된 상수로, 정수나 문자열과 같은 기본 데이터 타입으로 정의됩니다.
열거형 상수를 사용하면 코드의 가독성을 높이고, 상수 값을 그룹화하여 의미 있는 이름으로 사용할 수 있습니다.
```dart
enum UserType {
    Guest 0;
    User 1;
    Admin 2;
}

var userType = @enum.UserType.Guest;
```

## constant
코더스에서는 상수를 정의할 수 있습니다. 정의된 상수는 프론트엔드, 백엔드, 데이터베이스에서 사용할 수 있도록 자동으로 코드가 생성됩니다. 데이터베이스에서는 상수가 함수로 작성되어 쿼리에서도 사용할 수 있습니다.

```dart
[comment='guest user type']
constant UserTypeGuest = 1;

[comment='기간 타입']
constant PeriodtypeDay = "day";

var userType = @constant.UserTypeGuest;
@console.log(userType);
```

## string
코더스에서는 문자열을 정의할 수 있으며, 문자열은 다국어로 확장할 수 있습니다. 정의된 문자열은 프론트엔드와 백엔드에서 모두 사용할 수 있습니다. 특히, 문자열은 개발자가 아닌 기획자도 쉽게 확인할 수 있도록 엑셀 파일로 간편하게 내보낼 수 있습니다.
```dart
define string[locale='ko', default=true] {
    msgHello: '안녕하세요';
    formatHello: '{name} 안녕!';
}

define string[locale='en'] {
    msgHello: 'Hello';
    formatHello: '{name} Hi!';
}

var msg = @string.msgHello;
var msg2 = @string.formatHello('coders');
```

## 배열
배열은 동일한 데이터 타입을 순차적으로 저장하는 자료 구조입입니다.
```dart
var x int32[10];
x[0] = 1;
x[2] = 2;
...
x[9] = 9;
for(var i = 0; i < x.length; ++i) {
  var n = x[i];
  @console.log("n = " + string(n));
}
```



## error
API의 응답 코드로 사용되는 에러 코드를 정의할 수 있습니다.
백엔드에서 사용되는 응답 문자열을 정의할 수 있으며, 이를 다국어로 확장할 수 있습니다.
`@header` 인터페이스에 국가 코드와 언어 코드가 정의된 경우, 서버에서 다국어 문자열로 응답할 수 있습니다.

```dart
define error[locale='ko', default=true] {
    Success 0 '성공'
    Failed 1 '실패'
}
define error[locale='en', default=true] {
    Success 'Success';
    Failed 'Failed';
}

...
handler login {
    func execute(user @auth, req @req) (res @res) {
        ...
        res.code = @error.Success;
        return;
    }
}
```

## 제어문

### if 문
코더스는 if 제어문을 각 플랫폼에 맞게 변환합니다.
if 문은 조건에 따라 코드의 실행 흐름을 제어하는 가장 기본적인 제어 구조로,
다양한 조건을 평가하여 해당 조건이 참인 경우에만 특정 코드를 실행할 수 있도록 합니다.
```dart
var x = false;
if(x == false) {
    @console.log('x is false');
}
```

### for 문
코더스는 `for` 제어문을 각 플랫폼에 맞게 변환합니다. 
`for` 문은 반복 작업을 수행할 때 사용하는 기본적인 제어 구조로, 반복의 시작, 종료 조건,
그리고 반복 시마다 수행할 작업을 명시할 수 있습니다.
주로 정해진 횟수만큼 반복해야 할 때 사용되며,
`for` 문을 통해 다양한 조건에 따라 코드 블록을 반복 실행할 수 있습니다.
```dart
var x = [1,2,3];
for(var i = 0; i < x.length; ++i) {
  var n = x[i];
  @console.log(n);
}
```

### while 문
```dart
var stop = false;
while(!stop) {
  ...
  stop = true;
}
```

### switch 문
```dart
var x = 1;
switch(x) {
  case 1:
    @console.log('x is ' + string(x));
    break;
  case 2:
    @console.log('x is ' + string(x));
    break;
  default:
    @console.log('unknown');
    break;
}
```

### try catch 문
```dart
try {
  var vo = @query.selectUser('nickname');
} catch(e) {
  @console.error(e);
}
```
대부분의 언어는 try catch 문을 지원합니다. try 블록 안에 특정 부분에서 예외가 발생하면 catch 블락이 호출되어 
에러 흐름을 관리할 수 있습니다.

> go 언어는 try catch를 지원하지 않으므로 주의해야 합니다.

## 타입 캐스팅
변수 타입을 변경할 수 있습니다.
```dart
var x = 10.1;
var y = int32(x);
var str = string(10);
var d = double("123.1");
```
위와 같이 10.1 을 정수로 변환 하는 예제입니다. 코더스는 명시적 타입 캐스팅을 지원합니다. string(10) 은 각 언어마다 문자열로 변경됩니다. double("123.1")은 123.1 double 타입으로 변환됩니다.

## lambda 함수
코더스는 lambda 함수를 지원합니다.
```dart
var add = (l int32, r int32) int32 {
  return l + r;
}
var x = add(10, 20);
```
위 예시는 add 라는 lambda 함수를 정의하고 있습니다. 코더스는 lambda 함수를 변환하지만 일부 언어에서는 동작하지 않을 수 있습니다.

## await, async 문법
대부분의 언어에서 비동기 함수를 지원합니다. 비동기 함수를 동기 함수처럼 사용하기 위해 await 키워드를 사용합니다. await 을 사용하면 코더스는 자동으로 함수를 async 로 변환합니다.
```dart
class Sample {
  func hello() future<void> {
    ...
  }
}

var s = Sample();
await s.test();
```

## struct 문법
struct 타입은 백엔드, 프론트엔드 에서 모두 사용할 수 있는 데이터 타입입니다. 서버측에서 struct 타입을 정의하여 클라이언트측에 전달하면
클라이언트측에서 이를 화면에 출력하면 됩니다. struct 타입은 변수만 정의할 수 있습니다. method는 정의할 수 없습니다. 

> method를 정의하기 위해서는 class 타입을 사용하세요.

```dart
[comment='사용자 정보']
struct User {
  [comment='사용자 아이디']
  userId string;

  [comment='사용자 이메일']
  email string;

  [comment='닉네임']
  nickname string?;
}
```

위 예시는 사용자 데이터 타입을 정의한 코드입니다. 사용자 comment 는 문서에 기술되는 내용입니다.

## entity 문법
entity 타입은 백엔드 에서 데이터베이스의 정보를 담기 위한 타입입니다.
```dart

table user {
  user_id varchar(32);
  email varchar(128);
  nickname varchar(256);
  create_dt datetime;
  key(user_id);
}

entity UserVo {
  userId varchar(32);
  email varchar(128);
  nickname varchar(256);
  password varchar(512);
  createDt datetime;
}
query selectUser(nickname Nickname) UserVo? {
  select user_id as userId,
    email,
    nickname,
    password,
    create_dt as createDt
  from user
  where nickname = :nickname;
}

struct UserInfo {
  ...
}

var vo = @query.selectUser("nick");

var userInfo = UserInfo();
if(vo != null) {
  userInfo.set(vo);
}
```

위 예시는 사용자 테이블에서 조회하는 코드입니다. entity UserVo 티입을 정의하고 query 를 정의하였습니다.
selectUser 쿼리의 리턴 값은 nullable로 되어 있습니다. 또한 struct 와 이름 기반으로 복사하는 코드를 코더스는 자동으로 생성합니다.

## query 문법
코더스에서 데이터베이스 에서 삽입, 변경, 조회를 위한 SQL 문을 작성하기 위해 `query`를 사용합니다.
```dart
query selectUser(email Email) UserVo? {
  select user_id as userId,
    nickname
  from user
  where email = :email;
}
```
위와 같이 SQL 문을 작성하면 코더스는 각 플랫폼에 맞게 코드를 생성합니다.
springboot 에서는 xml 로 변환되고, 다른 언어는 쿼리 문자열로 변환됩니다.

> 코더스는 SQL에 사용된 table과 컬럼을 추적하여 빌드시 쿼리의 유효성을 체크합니다.

## table 문법
코더스는 데이터베이스 테이블을 작성하는 문법을 제공합니다.
```dart
domain Email varchar(128);
domain Nickname varchar(64);

table user {
  user_id bigint;
  nickname Nickname;
  email Email;
  key(user_id);
  unique index(email);
  index(email);
}

table user_profile {
  user_id bigint;
  image varchar(128) = '';
  key(user_id);
  link(user_id) to user(user_id);
}
```
위와 같이 직관적인 문법으로 작성하면 코더스는 mysql, oracle, mssql에서 동작하는
SQL 문을 생성합니다.

## service 문법
## batch 문법
## widget 문법
## html 문법
