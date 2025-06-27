---
outline: deep
---

# Table 설계

코더스는 데이터베이스 테이블 을 설계할 수 있는 문법을 제공합니다. Oracle, MySQL, MsSQL 과 같은 대중적인 DBMS 구문보다 쉬운 
문법을 제공하고 이를 DBMS 에 맞게 변환합니다.

## Domain
도메인은 테이블 컬럼의 데이터타입을 일관되게 유지하기 위한 개념입니다.

```dart
[comment='사용자 아이디']
domain UserID bigint;

[comment='사용자 이메일']
domain Email varchar(64);

[comment='사용자 닉네임']
domain Nickname varchar(128);

[comment='이미지 URL']
domain URL varchar(512);
```
위와 같이 정의를 하고 다음과 같이 적용할 수 있습니다.

```dart
table user {
    user_id UserID;
    email Email = '';
    nickname Nickname = '';

    key(user_id);
}
```
user 테이블은 user_id, email, nickname 컬럼을 정의하였습니다.

## Table 정의
코더스에서 테이블을 정의하면 설정한 데이터베이스 DDL 문으로 변환합니다. 테이블에는 Primary Key, Foreign Key, Index 를 설정할 수 있습니다.

```dart
table user {
    user_id UserID;
    email Email = '';
    nickname Nickname = '';

    key(user_id);
    unique index (email, user_id);
    index (nickname);
}

table user_item {
    user_id UserID;
    item_id ItemID;
    item_name varchar(128);

    key(user_id, item_id);
    link(user_id) to user(user_id);
}
```
user 테이블은 user_id 가 primary key 입니다. email 컬럼에 Unique 인덱스를 생성합니다. nickname 컬럼은 인덱스를 생성합니다.
user_item 테이블은 사용자가 여러개의 아이템을 소유할 수 있는 구조를 보여줍니다. user_id 컬럼은 user와 Foreign Key 관계로 
연결되어 있습니다. 코더스에서는 link A to B 형식으로 작성하면 됩니다.

## Auto Increment
MySQL 에는 auto_increment 컬럼이 있습니다. 이 컬럼은 삽입이 될 때마다 증가되는 컬럼입니다.
```dart
[name="공지사항", comment="공지사항"]
table notice {
    [name="공지사항 번호", comment="공지사항 번호"]
    notice_no auto;
    title varchar(512);
    content varchar(4000);
    create_at datetime = CURREMT_TIMESTAMP;
    update_at datetime = CURREMT_TIMESTAMP;
    key(notice_no);
}
```
코더스는 위와 같이 auto 키워드를 사용하면 auto_increment 컬럼으로 자동으로 변환합니다.

> auto 키워드는 는 Oracle에서는 동작하지 않습니다. sequence를 권장합니다.

## Sequence
Sequence 는 자동 증가를 위한 객체를 의미합니다. Oracle에는 Sequence 객체를 지원합니다. 코더스에서는 
다양한 DBMS에 Sequence를 지원하기 위한 구문을 제공합니다.
```dart
[table='post_num']
sequence post {}


...
handler writeNotice {
    func execute(req @req) (res @res) {
        ...
        var num = @sequence.post.next();
        ...
    }
}
...
```
@sequence.post.next() 구문은 다음 번호를 리턴할 것입니다. MySQL 은 auto_increment 컬럼을 지원하지만 다른 DBMS 는 그렇지 않습니다.
코더스에서 제공하는 sequence를 사용하면 대부분 DBMS에서 가능하도록 변환합니다.


## Data 정의
데이터베이스를 설계하고 나면 미리 정의된 데이터를 삽입해야 하는 경우가 있습니다.
```dart
table user_type {
    user_type integer;
    name varchar(128);
    key(user_type);
}

data user_type(user_type) {
    (1, '사용자');
    (2, '관리자');
}
```
코더스는 위와 같이 `data' 키워드를 사용하면 미리 정의된 데이터를 insert 쿼리로 변환해 줍니다.
