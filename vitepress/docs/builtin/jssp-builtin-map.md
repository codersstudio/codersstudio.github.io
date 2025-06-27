---
outline: deep
---

# map\<K, V\>

## **`var length int32`**
```dart
var x map<string, int32> = {};
var len = x.length;
```

## **`var keys list\<K\>`**
```dart
var x map<string, int32> = {};
x.put('apple', 1);
x.put('google', 2);
for(var k in x.keys) {
  var value = x[k];
  @console.log(k + " is " + string(value));
}
```

## **`func put(key K, value V) void`**
```dart
var x map<string, int32> = {};
x.put('apple', 1);
x.put('google', 2);
```

## **`func get(key K) V`**
```dart
var x map<string, int32> = {};
x.put('apple', 1);
x.put('google', 2);
var n = x.get('apple');
@assert(n == 1, '');
```

## **`func has(key K) bool`**
```dart
var x map<string, int32> = {};
x.put('apple', 1);
x.put('google', 2);
@assert(x.has('apple') == true, '');
```

## **`func remove(key K) void`**
```dart
var x map<string, int32> = {};
x.put('apple', 1);
x.put('google', 2);
x.remove('apple');
@assert(x.length == 1, '');
```

## **`func clear() void`**
```dart
var x map<string, int32> = {};
x.put('apple', 1);
x.put('google', 2);
x.clear();
@assert(x.length == 0, '');
```

