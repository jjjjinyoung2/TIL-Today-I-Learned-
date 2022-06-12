REST API(Representational State Transfer)

**웹에서 사용되는 데이터나 자원(Resource)을 HTTP URI로 표현하고, HTTP 프로토콜을 통해 요청과 응답을 정의하는 방식**

## 💡 리차드슨의 REST 성숙도 모델

레오나르드 리차드슨(Leonard Richardson)은 REST API 를 잘 적용하기 위한 4단계 모델을 만들었다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aa020a18-9840-4ed1-8843-d9022a198513/Untitled.png)

- 모든 단계를 충족해야 REST API 라고 부를 수 있다.
- 실제로 엄밀하게 3단계까지 지키기 어렵기 때문에 2단계까지만 적용해도 좋은 API 디자인이라고 볼 수 있고, 이런 경우를 HTTP API라고 부른다.

### ✅ REST 성숙도 모델 - 0단계

> \***\*HTTP 프로토콜을 사용하기만 해도 된다. → REST API의 출발 (기본단계)\*\***

- 모든 요청에서 엔드포인트로 `/appointment`를 사용한다.
- 해당 API를 REST API라고 할 수는 없다.

```jsx
//Request
POST/appointment HTTP/1.1
[헤더생략]
{
"date":"2022-06-10",
"doctor":"진영"
}

//Response
HTTP/1.1 200 OK
```

### ✅ REST 성숙도 모델 - 1단계

> 개별 리소스(Resource)와의 통신을 준수한다.

모든 자원은 개별 리소스에 맞는 엔드포인트(Endpoint)를 사용해야하며 요청하고 받는 자원에 대한 정보를 응답으로 전달해야 한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/65927b26-e50d-4b6d-8aa1-3f61fa347257/Untitled.png)

ex 1) 예약 가능한 시간 확인

**요청**->**"엔드포인트" : `/doctors/허준`**→**응답**: 데이터(리소스) -> 의사 허준의 예약 가능한 시간대

ex 2) 특정 시간에 예약 **요청**->**"엔드포인트" : `/slots/123`**실제 변경되는 리소스 요청

-> 예약이 불가능할 경우 ? **응답**: 리소스 사용에 대한 실패 여부를 포함한 응답을 받는다.

- 예시와 같이 어떤 리소스를 변화시키는지 혹은 어떤 응답이 제공되는지에 따라 각기 다른 엔드포인트를 사용하기 때문에 적절한 엔드포인트를 작성하는 것이 중요하다.
- 개별 리소스에 맞는 **엔드포인트(Endpoint)**를 사용해야 한다는 것과 요청하고 받은 자원에 대한 정보를 응답으로 전달해야 한다.이때 응답으로 리소스를 전달할 때도 사용한 리소스에 대한 정보와 함께 리소스 사용에 대한 **성공/실패 여부를 반환**
  해야 합니다.
- 엔드포인트 작성방법 : 동사, HTTP메서드, 어떤 행위에 대한 단어사용 지양
  ⇒ 리소스에 집중해 명사 형태의 단어로 작성

### ✅ REST 성숙도 모델 - 2단계

> CRUD(Create, Read, Update, Delete)에 맞게 적절한 HTTP 메서드를 사용하는 것에 중점

- StatusCode도 활용하여 반환
- 관련 리소스를 클라이언트가 `Location` 헤더에 작성된 URI를 통해 확인할 수 있도록 하면 완벽하게 REST 성숙도 모델의 2단계를 충족했다고 볼 수 있다.
- 현재 가장 많은 REST API가 이 단계에 해당한다고 한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/92afcfac-d1ad-40a2-9907-f1b34359dfb4/Untitled.png)

ex 1) 예약 가능한 시간을 조회(READ)하기 위해 **`GET`** 로 요청→ `GET` 메소드는 `body`를 가지지 않기 때문에 **query parameter**를 사용하여 리소스 전달-> **응답**: 데이터(리소스) -> 의사 허준의 예약 가능한 시간대

ex 2) 특정 시간에 예약을 생성(CREATE)하기 위해 **`POST`** 로 요청→ **응답** : 새롭게 생성된 리소스 → 상태코드 **`201 Created`** 로 명확하게!

[HTTP 메서드](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) 사용 규칙

- `GET` 메서드 같은 경우는 서버의 데이터를 변화시키지 않는 요청에 사용해야 합니다.
- `POST` 메서드는 요청마다 새로운 리소스를 생성하고 `PUT` 메서드는 요청마다 같은 리소스를 반환합니다. 이렇게 매 요청마다 같은 리소스를 반환하는 특징을 멱등([idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent))하다고 합니다. 그렇기 때문에 멱등성을 가지는 메서드 `PUT`과 그렇지 않은 메서드`POST`는 구분하여 사용해야 합니다.
- `PUT` 메서드와 `PATCH` 메서드도 구분하여 사용해야 합니다. `PUT`은 교체, `PATCH`는 수정의 용도로 사용합니다.

### ✅ REST 성숙도 모델 - 3단계

> HATEOAS, 하이퍼미디어 컨트롤(Hypertext As The Engine Of Application State)을 적용한다.

- 2단계와 거의 동일하지만, **응답에는 리소스의 URI를 포함한 링크를 넣어 새로운 기능에 접근할 수 있도록 하는 것이 3단계의 중요 포인트**이다.
- **응답에 들어가게 되는 링크 요소** : 응답을 받은 다음에 할 수 있는 다양한 행동 을 위해 많은 하이퍼미디어 컨트롤을 포함,

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/769b4262-bfdb-49ba-8afe-bd1af245c96a/Untitled.png)

ex) 예약 가능 시간을 확인 **요청**-> **응답** : 예약을 할 수 있는 링크를 삽입하여 응답

# Open API

- 누구나 사용 할 수 있도록 공개된 API(무제한으로 이용할 수 있다는 건 아님)
- Open API 이더라도 정해진 이용 수칙이 있고, 그에 따라 제한사항 (가격, 정보 등) 이 있다.

# \***\*API Key\*\***

- 서버의 문을 여는 열쇠
- API를 이용하기 위해서는 **API Key** 가 필요(필요하지 않은 경우도 있다.)
- API Key가 필요한 경우에는 로그인한 이용자에게 자원에 접근할 수 있는 권한을 API Key의 형태로 제공하고, 데이터를 요청할 때 API key를 같이 전달해야 원하는 응답을 받을 수 있다.

### 레퍼런스

- [구글 REST API 작성 가이드라인](https://cloud.google.com/apis/design/resources?hl=ko)
- [마이크로소프트 REST API 작성 가이드라인](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md)
