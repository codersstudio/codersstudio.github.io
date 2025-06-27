---
outline: deep
---

# @auth

## interface
```dart
interface auth {
  var userId string;
  static func createAccessToken(key string) string
  static func createRefreshToken(key string) string;
}
```
