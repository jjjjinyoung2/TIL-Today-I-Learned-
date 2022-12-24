event.preventDefault() 의 역할이 무엇인지 설명하세요.
디폴트 이벤트를 작동하지 못하게 만드는 역할을 합니다.
a, input, textarea 등의 기본 동작을 막을 수 있으며 예를 들어 체크박스의 click event 콜백함수에 preventDefault()를 선언하면 checkbox의 기본 동작인 토글링이 작동하지 않습니다.
