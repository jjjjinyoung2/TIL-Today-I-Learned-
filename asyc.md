## blocking = 동기

작업이 끝날 때 까지, 이어지는 작업을 막는것 (요청에 대한 결과가 동시에 일어난다)

첫번째 작업이 끝난 시기와 두번째 작업이 시작하는 시기는 같다 = 비효율적

## non-blocking = 비동기

커피 주문이 blocking되지 않고, 언제든지 주문을 받을 수 있다. (요청에 대한 결과가 동시에 일어나지 않는다.)

커피가 완성되는 즉시 커피를 제공한다. 첫번째 주문 완료 시점와 두번째 주문 시작시점이 같을 필요가 없다.

Node.js 를 non-blocking하고 비동기적(asynchronous)으로 작동하는 런타임을 개발

JavaScript의 비동기적 실행(Asynchronous execution)이라는 개념은 웹 개발에서 특히 유용. 비동기적으로 작동되어야 효율적이다.

- 비동기 함수 전달 패턴21 : callback 패턴

```jsx
let request = "caffelatte";
orderCoffeeAsync(request, function (response) {
  //response -> 주문한 커피 결과
  drink(response);
});
```

- 비동기 함수 전달 패턴 2 : 이벤트 등록 패턴

```jsx
let request = "caffelatte";
orderCoffeeAsync(request).onready = function (response) {
  //response -> 주문한 커피 결과
  drink(response);
};
```
