프론트엔드 입장에서 신경써야 할 보안은 어떤 것들이 있나요?
CSRF와 XSS 등이 있습니다.
CSRF는 사이트 간 요청 위조(cross site request forgery) 라는 의미로 다른 사이트에서 유저가 보내는 요청을 조작하는 것을 말합니다. 이러한 문제는 referrer 검증, security token 사용, double submit cookie 검증 등으로 해결 할 수 있습니다. XSS(cross site scripting)는 공격자가 상대방의 브라우저에 script를 실행할 수 있게 하여 사용자의 세션을 가로채거나 웹 사이트 변조, 악의적 컨텐츠 삽입, 피싱 공격 등을 하는 것으로 예방하기 위해서는 중요 정보를 쿠키에 저장하지 않고, 정규 표현식을사용해 태그 입력 필터를 설치하고, HTML 포맷의 입력을 제한하는 방법 등이 있습니다.

referer(=referrer) 검증 : 서버에서 request의 referer(해당 정보를 요청한 사이트의 전체 주소)을 확인하여 도메인이 일치하는지 검증하는 방법(= SameSite 쿠키 설정 (내용 추가 필요))
Security Token(CSRF Token) 사용 : 사용자의 세션에 임의의 난수값을 저장하고 사용자의 매 요청마다 해당 난수 값을 포함시켜 전송 후 서버에서 검증
Double Submit Cookie 검증: security token 검증의 한 종류. 세션을 사용할 수 없는 환경에서 사용. 스크립트 단에서 요청 시 난수 값을 생성하여 쿠키에 저장하고 동일한 난수값을 요청 파라미터에도 저장하여 서버로 전송.