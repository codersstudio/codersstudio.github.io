---
outline: deep
---

# Vue, React 개발
코더스는 프론트엔드 플랫품중 대중적인 Vue와 React를 지원합니다. Vue와 React는 SPA 방식으로 웹 앱을 개발할 수 있는
유명한 프레임워크들입니다. 코더스는 Vue 문법을 일부 채용하였으며 이를 React JSX 문법으로 변환합니다. 코더스를 
사용하면 HTML 코드를 Vue와 React로 생성할 수 있습니다.

```dart
html LoginPage {

  ref var email string;
  ref var password string;

  func login() {
    var req = @req.login();
    req.email = email;
    req.password = password;
    var res = @api.sendSync(req);
    if(res.code == @error.Success) {
      @store.app.accessToken = res.accessToken;
      @router.replace('/main');
    } else {
      alert(res.message);
    }
  }

  func onMounted() {
    @console.log('onMounted..');
  }

  <template>
    <div>
      <h1>Login</h1>
      <input type="text" v-model="email" />
      <input type="password" v-model="password" />
      <button @click="login">Login</button>
    </div>
  </template>
}
```
위 코드는 Login 페이지 코드를 보여줍니다. `ref` 키워드는 Vue에서 반응형 변수를 의미합니다. 이 변수가 React에서 양방향이 되어야 하기 때문에
`useEffect` 코드를 생성하여 양방향 효과를 처리하고 있습니다.


Vue 에는 변수 변화를 모니터링하는 `watch`, `computed`, `props` 같은 기능들이 존재하며 모두 React에서 가능하도록 변환이 됩니다.

```dart
[path="components", route="/", redirect="/home"]
html HomeLayout {
    func onMounted() {
        @console.log("onMounted");
    }
    func onUnmounted() {
        @console.log("onUnmounted");
    }
    
    <template>
        <div>
            <router-view></router-view>
        </div> 
    </template>
}


[path="views/home"]
html CounterView {
    [required]
    var @props.count = 0;
    
    func clickMe() {
        @emit.changeCount(@props.count * 2);
    }
    
    [expose]
    func increment() {
        @console.log("increment");
    }
    
    func onMounted() {
       @console.log("CounterView.onMounted");
    }
    
    func onUnmounted() {
       @console.log("CounterView.onUnmounted");
    }
    
    <template>
        <h1>CounterView: {{ @props.count * 2 }}</h1>
        <button @click="clickMe">CounterView: Click Me</button>
    </template>
}


[path="views/home", route="/home", parent="HomeLayout"]
html HomeView {
  ref var counterView CounterView;
  ref var count = 0;
  func clickMe() {
      count++;
  }
  func clickCounterView() {
      @console.log("clickCounterView");
      counterView.increment();
  }
  watch count() {
      @console.log("count changed: " + count);
  }
    
  func onMounted() {
      @console.log("onMounted");
  }
  func onUnmounted() {
      @console.log("onUnmounted");
  }
  <template>
    <h1>Count: {{ count }}</h1>
    <CounterView ref="counterView" @changeCount="(value) => count = value;" :count="count" />
    <button @click="clickMe">Click Me</button>
    <button @click="clickCounterView">Click CounterView</button>  
  </template>
}
```

위 예제는 CounterView 콤포넌트를 자식으로 포함하여 연동하는 예입니다. `ref='counterView'` 속성으로 CounterView 콤포넌트를 참조하고 있으며
`changeCount` 이벤트 발생시 count를 업데이트 하고 있습니다. 또한 `watch count()` 는 count 값이 변경되면 count() 함수가 호출됩니다.

```dart
...
    [required]
    var @props.count = 0;
    
    func clickMe() {
        @emit.changeCount(@props.count * 2);
    }
    
    [expose]
    func increment() {
        @console.log("increment");
    }
...
```
위 코드는 CounterView 콤포넌트의 일부입니다. `@props.count` 변수는 외부 파라미터로 전달 받는 값입니다. `expose` 속성으로 정의된 `increment()` 함수는
부모 콤포넌트에서 호출하기 위해 노출시키는 속성입니다.

이와 같이 코더스는 비슷한 Vue 문법으로 작성하면 이를 React 코드로 변환합니다.
