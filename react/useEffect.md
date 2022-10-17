어떠한 컴포넌트가 Mount(화면에 첫 렌더링), Update(다시 렌더링),Unmount(화면에서 사라질때) 특정 작업을 처리할 코드를 실행시키고 싶을때 사용

```jsx
useEffect(()=>{//작업})
인자로 콜백함수를 받는다
다른 함수의 인자로 전달된 함수

//두가지 형태가 있다.
1. 인자로 하나의 콜백함수만 받는경우
렌더링 될 때 마다 매번 콜백 실행
useEffect(()=>{
	//작업
});

2. 인자로 콜백함수와 배열을 받는경우(dependency array)
화면에 첫 렌더링 될때 실행되고, 배열 안에 들어있는 value 값이 바뀔때 실행된다.
value가 빈 배열로 들어가면 컴포넌트가 화면에 첫 렌더링 될때만 실행됨.
useEffect(()->{
	//작업
},[value]);
```

Clean Up - 정리

타이머를 시작했다면 더이상 필요 없을때 타이머를 멈추기 위한 정리작업이 필요하다.

useEffect 안 return 값으로 넣어주면 된다.

```jsx
useEffect(() => {
  //구독...
  return () => {
    //구독 해지...
  };
}, []);
```

```jsx
import React, {useState, useEffect} from "react";

function App () {
	const [const, setcount] = useState(1);
	const [name, setname]= useState("");

	const handleCountUpdate = () => {
		setCount(count + 1);
	};

	const handleInputChange = (e) => {
		setName(e.target.value);
	};

//렌더링 될때마다 매번 실행됨-렌더링이후
useEffect(()=>{
	console.log("렌더링");
});

//마운팅 + count가 변화할 때마다 실행됨
useEffect(()=>{
	console.log("count변화");
},[count]);

//마운팅 + name이 변경될때마다 실행됨
useEffect(()=>{
	console.log("name변화");
},[name]);

//처음 마운팅 될때만 실행됨[빈배열]
useEffect(()=>{
	console.log("마운팅")
},[])

return (
	<div>
	<button onclick = {handleCountUpdate}>Upd</button>
</div>

	)
}
```
