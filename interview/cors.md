Same-Origin Policy와 CORS에 대해서 설명해주세요.
Same Origin Policy라는건 같은 네트워크 안에서만 HTTP request의 요청이 가능하다는 정책입니다. 하지만, 현대의 서비스는 프론트앤드 서버와 백앤드 서버가 따로 있는 경우가 많기 때문에 다른 서버로 http request를 보내야하고 이러한 정책을 Cross Origin Resource Sharing(CORS)라고 합니다.
CORS(Cross-Origin Resource Sharing)는 교차 출처 리소스 공유라는 의미로 추가 HTTP 헤더를 사용하여 한 출처에서 다른 출처의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에게 알려주는 체제입니다.