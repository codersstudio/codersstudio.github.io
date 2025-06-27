---
outline: deep
---

# 프로시저 개발

코더스는 데이터베이스에서 사용되는 프로서저와 함수를 쉽게 작성할 수 있습니다.
```dart
dbfunc sample() integer {
  var x integer = 0;
  x += 10;
  return x;
}

dbproc updateUser(_userId varchar(32), _nickname varchar(128)) {

  var email varchar(128) = '';

  if((select count(*) from user where user_id = _userId) == 0) {
    return;
  }

  select email into _email from user where user_id = _userId;


  update user set nickname = _nickname
  ...
}
```
위와 같이 작성하면 코더스는 Mysql, Oracle, Mssql 프로시저 문법으로 변환합니다.

```dart
query updateUser(userId varchar(32), nickname varchar(128)) {
  call @dbproc.updateUser(:userId, :nickname);
}
```
`query` 문법으로 프로시저를 호출하도록 작성하면 백엔드 플랫폼 코드로 변환합니다.

