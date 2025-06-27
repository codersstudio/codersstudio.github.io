---
outline: deep
---

# Flutter 개발
코더스는 Flutter를 개발하기 위한 문법을 제공합니다. Flutter는 한 번의 코드베이스로 iOS, Android, 웹, 데스크탑을 모두 개발할 수 있는
구글에서 개발한 SDK 입니다. 코더스는 Dart 언어 문법을 채용하여 Widget 클래스 문법으로 개발할 수 있습니다. 또한 코더스는 Widget 구성시
child, children 속성을 제거하였고, ',' 구문을 ';' 구문으로 작성하도록 문법을 제공하여 ',' 구문으로 인한 번거로움을 해소하고 있습니다.

```dart
[stateful]
widget LoginPage {
  func build(context BuildContext) widget {
    return Scaffold {
      appBar: AppBar("Login");
      body: Container {
        Text('Login Page.');
      }
    }
  }
}
```
위 코드는 stateful widget 클래스 예시입니다. `Scaffold (...)` 대신에 `{ }` 구문을 사용함으로써 좀 더 가독성을 높혔습니다.
`Container { Text(...); }` 구문은 child 속성을 제거하였습니다. 코더스는 Container의 child 속성과 Text 가 Widget 클래스라는 것을 알고 있으므로
자동으로 child 속성을 포함하여 코드를 생성합니다.
```dart
...
Column {
  const SizedBox(height: 8);
  Text('Item 1');
  const SizedBox(height: 8);
  Text('Item 2');      
}
...
```
위 코드는 Column Widget 클래스 사용법을 보여줍니다. 마찬가지로 children 속성이 생략되었습니다.

## Statefull Widget
Flutter에서 stateful Widget 클래스 작성시 기본 클래스와 State&lt;T&gt; 를 상속하는 클래스를
만들어야 하는 번거로움이 있습니다. 코더스는 stateful Widget 클래스를 `stateful=true` 속성 추가로 쉽게 작성할 수 있습니다.

## API 연동
코더스는 `opcode` 키워드로 API 를 설계할 수 있습니다. `widget` 클래스에서 API를 연동할 수 있습니다.
```dart
[stateful]
widget LoginPage {

  var emailController = TextEditingController();

  func initState() {
    ...
  }

  func dispose() {
    emailController.dispose();
  }

  func clickLogin() {
    var req = @req.login();
    req.email = emailController.text;
    @api.send(req);
  }

  func @api.login(res @res) {
    if(res.code == @error.Success) {
      // login handler.
    }
  }

  func build(context BuildContext) widget {
    return Container {
      Column {
        TextField {
          ...
          hintText: @i18n.hintInputEmailText;
          controller: emailController;
          ...
        }
        ElapsedButton {
          onPressed: clickLogin;
        }
      }
    }
  }
}
```

## I18n
코더스는 프론트엔드에서 다국어를 지원할 수 있도록 문법을 제공합니다.
```dart
define string[locale='ko', default=true] {
  ...
  hintInputEmailText: '이메일을 입력하세요.'
  ...
}

define string[locale='en'] {
  ...
  hintInputEmailText: 'Please enter your email.'
  ...
}

define string[locale='en_US'] {
  ...
  hintInputEmailText: 'Please enter your email.'
  ...
}
```
위와 같이 언어코드만 지정 하거나 `en_US` 처럼 지역코드와 함께 지정할 수 있습니다.
코더스는 locale에 맞는 클래스들을 생성합니다.
```dart
var str = @i18n.hintInputEmailText;
```
위와 같이 작성하면 코더스는 기기에서 언어 변경시 자동으로 적용되도록 코드를 생성합니다.
