---
outline: deep
---

# Import
jssp는 코더스가 인식하는 확장자 입니다. jssp 확장자를 갖는 파일은 코더스가 파싱하는 대상입니다. 파일간의 의존성을 관리할 필요가 있습니다. 자주 쓰이는 파일을 먼저 앞에 두고 이후 참조하도록 할 수 있습니다.

## import
파일간에 의존성을 다루기 위해 import 키워드를 사용합니다.

structs.jssp 파일
```dart
struct UserInfo {
  nickname string;
  email string;
}
```

api.jssp
```dart
import 'structs.jssp';

define opcode[controller=Api, baseUrl='/api/v1'] {
  [method=get, action='user']
  getUser 100 'get user infomation'
}

req getUser {
  
}
res getUser {
  user UserInfo;
}
handler getUser {
  ...
}
```
api.jssp 파일에서 UserInfo struct 를 사용하고 있습니다. import를 하여 포함관계를 명확하게 하는 것이 좋습니다. 하나의 공통 파일을 만들고 import 를 관리할 수 있습니다.

main.jssp
```dart
import 'structs.jssp';
import 'api.jssp';
```

main.jssp 파일에 structs.jssp 파일을 먼저 앞에 두어 이후 파일에서 참조할 수 있도록 할 수 있습니다.

폴더를 분리하여 작성하는 경우 폴더를 import 경로로 사용할 수 있습니다.

controllers/api.jssp
```dart
...
```

controllers/auth.jssp
```dart
...
```
controllers 폴더에 두 개의 파일이 있다고 하면

main.jssp
```dart
import "controllers/*";
```

위와 같이 * 를 사용하여 여러 파일들 한번에 추가할 수 있습니다.
