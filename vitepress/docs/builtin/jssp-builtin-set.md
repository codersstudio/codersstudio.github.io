---
outline: deep
---

# set\<T\>

## **`var length int32`**
```dart
var x set<int32> = {}
x.put(1);
x.put(2);
@assert(x.length == 2, '');
```

## **`func put(item T) void`**
```dart
var x set<int32> = {}
x.put(1);
x.put(2);
```

## **`func get(index int32) T`**
```dart
var x set<int32> = {}
for(var i = 0; i < x.length; ++i) {
  var v = x.get(i);
  @console.log('v is ' + string(v));
}
```

## **`func has(item T) bool`**
```dart
var x set<int32> = {}
x.put(1);
x.put(2);
@assert(x.has(1) == true, '');
```
