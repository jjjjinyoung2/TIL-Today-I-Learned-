### ✔️ React-Query 는 서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러 핸들링 등 비동기 과정을 더 편하게 하는데 사용한다.

### ✔️ 사용하는 이유

---

서버로부터 값을 가져오거나 업데이트 하는 로직을 store 내부에 개발하는 경우가 많다. 그러다보니 store는 클라이언트 state를 유지해야하는데 어느 순간부터 store에 클라이언트 데이터와 서버 데이터가 공존하게 된다. 그리고 그 데이터가 서로 상호작용하면서 서버 데이터도 클라이언트 데이터도 아닌..게 탄생한다. (예를 들면 서버에는 이미 패치된 데이터가 클라이언트에서는 패치되기 전 데이터가 유저에게 사용되고 있는것?)

그래서 react-query를 사용해서 서버, 클라이언트 데이터를 분리한다.

> **if(kakao)2021의 [카카오페이 프론트엔드 개발자들이 React Query를 선택한 이유](https://if.kakao.com/session/118)와 함께 보시면 더욱 좋습니다.**
>
> 🙌 「if(kakao)2021 - 카카오페이 프론트엔드 개발자들이 React Query를 선택한 이유」 세줄요약 🤟
>
> 1. React Query는 React Application에서 서버 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트하는 작업을 도와주는 라이브러리입니다.
> 2. 복잡하고 장황한 코드가 필요한 다른 데이터 불러오기 방식과 달리 React Component 내부에서 간단하고 직관적으로 API를 사용할 수 있습니다.
> 3. 더 나아가 React Query에서 제공하는 캐싱, Window Focus Refetching 등 다양한 기능을 활용하여 API 요청과 관련된 번잡한 작업 없이 "핵심 로직"에 집중할 수 있습니다.
>
> [카카오페이 프론트엔드 개발자들이 React Query를 선택한 이유 | 카카오페이 기술 블로그](https://tech.kakaopay.com/post/react-query-1/)

### ✔️ react-query의 장점

---

프론트엔드 개발자가 구현하기 귀찮은 일들을 수행한다.

- 캐싱
- get 을 한 데이터에 대해 update를 하면 자동으로 get을 다시 수행한다. (예를 들면 게시판의 글을 가져왔을 때 게시판의 글을 생성하면 게시판 글을 get하는 api를 자동으로 실행)
- 데이터가 오래되었다고 판단되면 다시 get(invalidateQueries)
- 동일 데이터 여러번 요청하면 한번만 요청한다.(옵션에 따라 중복 호출 허용 시간 조절 가능)
- 무한 스크롤(Infinite Queries)
- 비동기 과정을 선언적으로 관리할 수 있다.
- react hook과 사용하는 구조가 비슷하다.

### ✔️ 사용하기

---

- react프로젝트 만들기

```jsx
npx create-react-app my-app
cd my-app
npm install react-query
```

- react의 가장 기본이 되는 곳에 react-query를 사용하도록 세팅.

```jsx
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* devtools */}
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### ✔️ api

---

### ✔️ use Query

---

- 데이터를 get 하기 위한 api 이다. post, update는 useMutation을 사용한다.
- 첫번째 파라미터로 unique Key가 들어가고, 두번쨰 파라미터로 비동기 함수(api 호출 함수)가 들어간다. (두번째 파라미터는 promise가 들어가야한다. )
- 첫번째 파라미터로 설정한 unique Key는 다른 컴포넌트에서도 해당 키를 사용하면 호출 가능하다. unique Key는 string과 배열을 받는다. 배열로 넘기면 0번 값은 string 값으로 다른 컴포넌트에서 부를 값이 들어가고 두번째 값을 넣으면 query 함수 내부에 파라미터로 해당 값이 전달된다.
- return값은 api의 성공, 실패여부, api return 값을 포함한 객체다.
- useQuery는 `비동기`로 작동한다. **즉, 한 컴포넌트에 여러개의 useQuery가 있다면 하나가 끝나고 다음 useQuery가 실행되는 것이 아닌 두개의 useQuery가 동시에 실행된다.** 여러개의 비동기 query가 있다면 useQuery보다는 `useQueries`를 권유한다.

```jsx
const Todos = () => {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: (data) => {
      // 성공시 호출
      console.log(data);
    },
    onError: (e) => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
      // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
      console.log(e.message);
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

- isLoading, isSuccess 말고 `status`로 한번에 처리 가능합니다.

```jsx
function Todos() {
  const { status, data, error } = useQuery("todos", fetchTodoList);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

### ✔️ \***\*useQuery 동기적으로 실행\*\***

---

- `enabled` 옵션을 사용하면 useQuery를 동기적으로 사용 가능합니다.
- useQuery의 3번째 인자로 옵션값이 들어가는데 그 옵션의 enabled에 값을 넣으면 그 값이 true일때 useQuery를 실행한다. 이것을 이용하면 동기적으로 함수를 실행 할 수 있다.

```jsx
const { data: todoList, error, isFetching } = useQuery("todos", fetchTodoList);
const {
  data: nextTodo,
  error,
  isFetching,
} = useQuery("nextTodos", fetchNextTodoList, {
  enabled: !!todoList, // true가 되면 fetchNextTodoList를 실행한다
});
```

### ✔️ \***\*useQueries\*\***

---

• useQuery를 비동기로 여러개 실행할 경우 여러 귀찮은 경우가 생긴다.

```jsx
const usersQuery = useQuery("users", fetchUsers);
const teamsQuery = useQuery("teams", fetchTeams);
const projectsQuery = useQuery("projects", fetchProjects);

// 어짜피 세 함수 모두 비동기로 실행하는데, 세 변수를 개발자는 다 기억해야하고 세 변수에 대한 로딩, 성공, 실패처리를 모두 해야한다.
```

- 이때 `promise.all`처럼 useQuery를 하나로 묶을 수 있는데, 그것이 `useQueries`이다. `promise.all`과 마찬가지로 하나의 배열에 각 쿼리에 대한 상태 값이 객체로 들어옵니다.

```jsx
// 아래 예시는 롤 룬과, 스펠을 받아오는 예시입니다.
const result = useQueries([
  {
    queryKey: ["getRune", riot.version],
    queryFn: () => api.getRunInfo(riot.version),
  },
  {
    queryKey: ["getSpell", riot.version],
    queryFn: () => api.getSpellInfo(riot.version),
  },
]);

useEffect(() => {
  console.log(result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
  const loadingFinishAll = result.some((result) => result.isLoading);
  console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
}, [result]);
```

### ✔️ \***\*unique key 활용\*\***

---

- unique key를 배열로 넣으면 query함수 내부에서 변수로 사용 가능하다.그것을 활용하면 아래와 같다. `params`를 주목!

```jsx
const riot = {
  version: "12.1.1",
};

const result = useQueries([
  {
    queryKey: ["getRune", riot.version],
    queryFn: (params) => {
      console.log(params); // {queryKey: ['getRune', '12.1.1'], pageParam: undefined, meta: undefined}

      return api.getRunInfo(riot.version);
    },
  },
  {
    queryKey: ["getSpell", riot.version],
    queryFn: () => api.getSpellInfo(riot.version),
  },
]);
```

### ✔️ \***\*QueryCache\*\***

---

- 쿼리에 대해 성공, 실패 전처리를 할 수 있다.

```jsx
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query);
      if (query.state.data !== undefined) {
        toast.error(`에러가 났어요!!: ${error.message}`);
      },
    },
    onSuccess: data => {
      console.log(data)
    }
  })
});
```

### ✔️ \***\*useMutation\*\***

---

- 값을 바꿀때 사용하는 api. return 값은 useQuery와 동일하고 간단히 예시코드로도 충분히 설명을 대신할 수 있으니 바로 코드 참고

```jsx
import { useState, useContext, useEffect } from "react";
import loginApi from "api";
import { useMutation } from "react-query";

const Index = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation(loginApi, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
      // variable : {loginId: 'xxx', password; 'xxx'}
    },
    onError: (error, variable, context) => {
      // error
    },
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
    },
    onSettled: () => {
      console.log("end");
    },
  });

  const handleSubmit = () => {
    loginMutation.mutate({ loginId: id, password });
  };

  return (
    <div>
      {loginMutation.isSuccess ? "success" : "pending"}
      {loginMutation.isError ? "error" : "pending"}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>로그인</button>
    </div>
  );
};

export default Index;
```

### ✔️ \***\*update후에 get 다시 실행\*\***

---

- mutation 함수가 성공할 때, unique key로 맵핑된 get 함수를 `invalidateQueries`에 넣어주면 된다.

```jsx
const mutation = useMutation(postTodo, {
  onSuccess: () => {
    // postTodo가 성공하면 todos로 맵핑된 useQuery api 함수를 실행합니다.
    queryClient.invalidateQueries("todos");
  },
});
```

- 만약 mutation에서 return된 값을 이용해서 get 함수의 파라미터를 변경해야할 경우 `setQueryData`를 사용한다.

```jsx
const queryClient = useQueryClient();

const mutation = useMutation(editTodo, {
  onSuccess: (data) => {
    // data가 fetchTodoById로 들어간다
    queryClient.setQueryData(["todo", { id: 5 }], data);
  },
});

const { status, data, error } = useQuery(["todo", { id: 5 }], fetchTodoById);

mutation.mutate({
  id: 5,
  name: "nkh",
});
```

### ✔️ \***\*react Suspense와 react-query 사용하기\*\***

---

- react-query를 사용하는 또 하나의 이유이다. 비동기를 좀 더 선언적 사용할 수 있어서 많이 사용하는 것 같다.
- **[Suspense (opens new window)](https://ko.reactjs.org/docs/concurrent-mode-suspense.html)**를 사용하며 loading을, **[Error buundary (opens new window)](https://ko.reactjs.org/docs/error-boundaries.html#gatsby-focus-wrapper)**를 사용하여 에러 핸들링을 더욱 직관적으로 할 수 있다.
- suspense를 사용하기 위해 `QueryClient`에 옵션을 하나 추가한다. 아래 방법은 global하게 suspense를 사용한다고 정의할 때 예시다.

```jsx
// src/index.js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

- 아래는 함수마다 suspense를 사용하는 예시입니다.

```jsx
const { data } = useQurey("test", testApi, { suspense: true });
```

- 위처럼 suspense 세팅을 완료했다면 react에서 제공하는 Suspense를 사용하면됩니다.

```jsx
const { data } = useQurey("test", testApi, { suspense: true });

return (
  // isLoading이 true이면 Suspense의 fallback 내부 컴포넌트가 보여집니다.
  // isError가 true이면 ErrorBoundary의 fallback 내부 컴포넌트가 보여집니다.
  <Suspense fallback={<div>loading</div>}>
    <ErrorBoundary fallback={<div>에러 발생</div>}>
      <div>{data}</div>
    </ErrorBoundary>
  </Supense>
);
```
