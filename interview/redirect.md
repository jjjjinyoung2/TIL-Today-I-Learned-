웹페이지 redirect의 다양한 구현법에 대해서 설명하세요.
HTTP, HTML, Javscript를 통해 리다이렉트가 가능합니다.
HTTP 리다이렉트는 3으로 시작하는 상태코드(3xx)를 지닌 응답을 활용해 리다이렉트가 가능합니다. HTML 에서는 <meta> 태그와 http-equiv 속성을 통해 가능하지만<meta http-equiv="refresh" content="지연시간;url=이동할사이트주소" />브라우저의 뒤로가기 버튼이 원하는 대로 동작하지 않기 때문에 지양해야 하는 방법입니다. Javascrip에서는 window.location 코드를 통해 리다이렉트가 가능합니다.