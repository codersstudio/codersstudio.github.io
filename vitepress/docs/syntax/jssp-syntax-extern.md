---
outline: deep
---


# Extern

외부 라이브러리를 연동하는 경우 extern 키워드를 사용합니다. 외부 라이브러리는 코더스로 표현하기 어렵거나,
보안상 분리해야할 경우, 기존의 라이브러리를 연결해야 할 경우에 사용합니다. 특히 코더스는 Flutter 플랫폼을 위해
많은 Widget 클래스들을 extern 으로 제공하고 있습니다.

```dart
extern {
 
 @dotnet[import="..."]
 @springboot[import="..."]
 enum UserType {

 }

 @springboot[import='...']
 service MqttService {
  ...
  func sendTopic(/* topic */ string, /* payload */ string) bool;
  ...
 }
}
```

extern 블락 안에 선언되는 열거형이나 클래스 등은 각 플랫폼마다 import 경로가 다를 것이므로 
원하는 플랫폼마다 import 경로를 작성해야 합니다. 중복 경로가 있을 경우에는 
코더스는 이를 감지하여 하나만 작성하게 됩니다.

함수는 파라미터 명은 제외하고 타입만 나열해야 합니다.

```dart
extern {
  // StringBuffer
  @flutter[import='dart:core']
  class StringBuffer {
      constructor(string);
      func write(string) void;
      func writeln(string) void;
      func toString() string;
  }

  // Duration
  @flutter[import='dart:core']
  class Duration({
      seconds: int32,
      hours: int32,
      minutes: int32,
      milliseconds: int32,
      microseconds: int32,
  }) {
      static var zero Duration;
  }
}
```
위 예시는 Flutter 외부 클래스들 입니다. Duration 클래스는 static 맴버 변수를 정의하고 있습니다.

```dart
var a = Duration({seconds: 3});
var b = Duration.zero;
```
와 같이 사용될 것입니다.

extern 키워드는 코더스가 다루기 어렵거나 분리해야 할 경우 언제든지 유연하게 연동할 수 있는 기능입니다.
