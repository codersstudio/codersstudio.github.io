---
outline: deep
---

# Class

많은 프로그래밍 언어들이 채택하고 있는 클래스는 데이터와 기능을 묶어주는 사용자 정의 타입입니다. 클래스는 속성과 메소드, 상속, 인터페이스 구현 등
객체지향 프로그래밍에서 중요한 개념입니다. 코더스는 Dart 문법과 비슷합니다.
```dart
class Dog {
  var name string;
  var age int32;
  var breed string?;
  constructor(this.name, this.age, {breed: this.breed});

  func bark() {
    @console.log('bark..');
  }
}
```
위 코드에서 Dog 클래스는 name, age, breed 속성을 갖고 있으며 생성자를 정의하였습니다.
코더스는 namded 파라미터를 다른 언어에 맞게 변환합니다. named 파라미터를 지원하지 않는
언어는 에러가 발생할 수 있으니 주의해야 합니다

> overloading 을 지원하지 않아서 각 언어별 컴파일 에러를 확인해야 합니다.

아래와 같이 사용할 수 있습니다.
```dart
var dog = Dog('바둑이', 3, breed: '시바견');
dog.bark();
```
