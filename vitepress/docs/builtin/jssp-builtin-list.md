---
outline: deep
---

# list\<T\>

## **`var length int32`**
```dart
var x list<int32>;
x.put(1);
x.put(2);
var len = x.length;
```

## **`func put(item T) void`**
```dart
var x list<int32>;
x.put(1);
x.put(2);
```

## **`func add(item T) void`**
```dart
var x list<int32>;
x.add(1);
x.add(2);
```

## **`func get(index int32) T`**
```dart
var x list<int32>;
x.add(10);
var y = x.get(0);
@assert(y == 10, '');
```

## **`func has(value T) bool`**
```dart
var x list<int32>;
x.add(10);
var y = x.get(0);
@assert(x.has(10) == true, '');
```
## **`func set(index int32, item T) void`**
```dart
var x list<int32>;
x.add(10);
x.set(0, 20);
@assert(x.has(20) == true, '');
```

## **`func removeAt(index int32) void`**
```dart
var x list<int32>;
x.add(10);
x.add(20);
x.removeAt(0);
```

## **`func remove(object T) T`**
```dart
var item = Item();
var items = list<item>();
items.add(item);
items.remove(item);
@assert(items.length == 0, '');
```

## **`func insert(index int32, item T) void`**
```dart
var item = Item();
var items = list<item>();
items.add(item);

var item2 = Item();
items.insert(0, item2);
@assert(items.length == 2, '');
```

## **`func forEach(lamda type<(T) void>)`**
```dart
var items list<int32> = [];
items.add(1);
items.add(2);
items.forEach((item) {
  @console.log(item);
});
```

## **`func find(lamda type<(T) bool>) T`**
```dart
var items list<int32> = [];
items.add(1);
items.add(2);
var n = items.find((item) {
  return item == 2;
});
@assert(n == 2, '');
```

## **`func indexWhere(value T) int32`**
```dart
var items list<int32> = [];
items.add(1);
items.add(2);
var index = items.indexWhere(2);
@assert(index == 1, '');
```

## **`func addAll(items list<T>) void`**
```dart
var items list<int32> = [];
items.add(1);
items.add(2);

var items2 list<int32> = [];
items2.addAll(items);
@assert(items.length == items2.length, '');
```

## **`func clear()`**
```dart
var items list<int32> = [];
items.add(1);
items.add(2);
items.clear();
```

## **`func sort(comparator type<(/*left*/ T, /*right*/ T)) int32`**
```dart
var items list<int32> = [];
items.add(1);
items.add(2);
items.sort((left, right) {
  if(right > left) {
    return 1;
  }
  if(right == left) {
    return 0;
  }
  return -1;
})
@assert(items[0] == 2);
```

## **`func removeWhere(lamda type<(/*value*/ T) bool>) void`**
```dart
var items list<int32> = [];
items.add(1);
items.add(2);
items.removeWhere((item) {
  return item == 2;
});
@assert(items.length == 1, '');
```
