### Async_Promise_Q&A

## Promise 실행 함수가 가지고 있는 두 개의 파라미터 `resolve` 와 `reject` 는 각각 무엇을 의미하나요?

resolve : 비동기 처리가 완료될 때 결과값

reject : 비동기 처리가 실패하거나 오류 날 때 결과값

## `resolve, reject`함수에는 전달인자를 넘길 수 있습니다. 이때 넘기는 전달인자는 어떻게 사용할 수 있나요?

성공시 resolve = .then

실패 또는 오류 시 reject = .catch

## `new Promise()`를 통해 생성한 Promise 인스턴스에는 어떤 메서드가 존재하나요? 각각은 어떤 용도인가요?

catch() : 오류나 에러가 났을 때 실행될 메서드
프로미스가 거부된다면 catch()가 호출되고 콜백의 반환값을 받을 수 있다.

then() : 정상적으로 작동됬을 때 실행될 메서드
프로미스가 이행된다면 then을 이용해 반환값을 이용할 수 있고 새 프로미스를 반환할 수도 있다..

finally() : 충족되거나, 거부되는지 여부에 관계없이 지정된 콜백 함수가 실행 메서드
프로미스 이행 여부에 관계없이 무조건 호출된다.

**all()**

매개변수로 여러개의 promise객체가 담긴 Array와 같이 순회가능한 객체를 받아옵니다.

## `Promise.prototype.then` 메서드는 무엇을 리턴하나요?

Promise.prototype.then( )

프로미스에 이행과 거부 처리기 콜백을 추가하고, 콜백이 호출 될 경우 그 반환값으로 이행되며 호출되지 않을 경우(onFulfilled, onRejected 중 상태에 맞는 콜백이 함수가 아닐경우) 처리된 값과 상태 그대로 처리되는 새로운 프로미스를 반환한다.

## `Promise.prototype.catch`메서드는 무엇을 리턴하나요?

Promise.prototype.catch( )

프로미스에 거부처리기 콜백을 추가하고, 콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우, 즉 이전 프로미스가 이행하는 경우 이행한 값을 그대로 사용해 이행하는 새로운 프로미스를 반환한다.

## Promise의 세 가지 상태는 각각 무엇이며, 어떤 의미를 가지나요?

Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태

new Promise() 메서드를 호출하면 대기(Pending)상태가 된다.

Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태

Rejected(거부) : 비동기 처리가 실패하거나 오류가 발생한 상태

## `await` 키워드 다음에 등장하는 함수 실행은 어떤 타입을 리턴할 경우에만 의미가 있나요?

Promise 타입을 리턴한 경우에만 의미가 있다.

await 은 promise 가 fulfill 되거나 reject 될 때 까지 async 함수의 실행을 일시정지하고,

promise 가 fulfill 되면 async 함수를 일시 정지한 부분부터 실행한다.

## `await`

키워드를 사용할 경우, 어떤 값이 리턴되나요?

promise 에서 fulfill 된 값!

만약 promise 가 reject 되면, await 문은 reject 된 값을 throw
