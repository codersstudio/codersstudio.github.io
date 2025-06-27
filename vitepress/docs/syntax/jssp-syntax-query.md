---
outline: deep
---

# 쿼리 작성

코더스는 쿼리를 작성하는 문법을 제공합니다. 함수 작성 구문과 비슷합니다.

```dart
table user {
    user_id UserID;
    email Email = '';
    nickname Nickname = '';

    key(user_id);
    unique index (email, user_id);
    index (nickname);
}

entity UserVo {
    userId UserID;
    email Email;
    nickname Nickname;
}

[service=User]
query selectUser(email Email) UserVo? {
    select user_id as userId
        , email
        , nickname
    from user
    where email = :email;
}
```

쿼리를 작성할 때에는 `query` 키워드를 사용합니다. 쿼리는 함수를 작성하는 것 처럼 작성하면 코더스는 플랫폼에 맞게 변환합니다.
springboot 플랫폼에서는 xml로 변환됩니다. 코더스는 쿼리를 해석할때 테이블과 커럼들의 유효성을 체크합니다.

> 유효성 체크를 off 하기 위해서는 [syntaxCheck=false] 옴션을 사용합니다.

```dart
handler login {
    func execute(req @req) (res @res) {
        ...
        var userVo = @query.selectUser(req.email);
        if(userVo == null) {
            ...
        }
        ...
    }
}
```
위와 같이 `@query` @ 문법으로 사용할 수 있습니다.

