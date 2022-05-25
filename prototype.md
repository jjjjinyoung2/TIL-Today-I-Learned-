JavaScript는 프로토타입 기반 언어(=원형객체) = 유전자

프로토타입(Prototype) : 자바스크립트에서만 사용되는 것은 아니고 하나의 디자인패턴이다.

특징 : 객체를 복제를 통해 생성

즉 원본 객체가 존재하고, 그 객체를 복제해서 새로운 객체를 생성하는 방법

```tsx
function User () {}

const evan = new User();

console.log(11, evan);
console.log(22, typeof evan);
11, User { __proto__: Object }
22, "object"
```

User함수에 new라는 생성자를 붙여서 객체를 인스턴스화 했다.

evan type = 객체

evan 은 User함수의 prototype 객체를 복제

⇒ 자바스크립트의 모든 객체는 prototype 객체를 가지고 있고, prototype을 복제하면서 객체를 생성한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/557ee123-03e2-411c-ad49-31b1cf68fb65/Untitled.png)

## constructor 프로퍼티

이 프로퍼티는 단어 그대로 원래의 생성자 함수(자기 자신)을 참조하고 있다.

```
console.log(User.prototype.constructor === User); // true
```

자신에게 자심을 참조하는 프로퍼티를 굳이 왜 가지고 있을까 싶지만 자신의 의해 생선된 인스턴스 객체 입장에서 봤을때 그 원형이 무엇인지 알 수 있는 수단이 된다. (앞서 말했듯 인스턴스는 생성자의 prototype을 그대로 복제하므로!)

## **proto** 프로퍼티

새롭게 생성된 객체는 원본 객체와의 연결을 가지고 있다. 이때 이 연결을 프로토타입 링크(Prototype Link)라고 한다. 그리고 이 링크가 담기는 프로퍼티가 **proto** 프로퍼티이다. 또한 프로토타입 링크는 생략가능하다.

```
const evan = new User();
console.log(evan.__proto__.constructor === User); // true
console.log(evan.constructor === User); // true
```

### 인스턴스, 프로토타입의 관계

- prototype(속성): prototype 속성은 프로토타입 객체를 참조한다.
- **proto** : 객체가 만들어지기 위해 사용된 원형인 프로토타입 객체를 참조하는 링크를 가진다.
- this : 인스턴스 객체를 가리킨다.

```jsx
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    return this.name;
  }
}

let kimcoding = new Human("김코딩", 20);
//Human 함수의 prototype 속성이 참조하는 프로토타입객체는
//new라는 연산자와 Human함수를 통해 생성된 모든 객체의 원형이 되는 객체이다.
//즉, 생성된 모든 객체가 참조한다는 것!
```
