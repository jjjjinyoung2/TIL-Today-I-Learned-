CSS에서 px, em, rem, vh, vw 단위들의 차이점은 무엇인가요?
px은 디스플레이의 1px을 의미하고 절대 길이 단위입니다. 나머지 단위들은 상대 길이 단위인데 그 중에서도 em과 rem은 font-size에 비례합니다. em은 상위 요소의 font-size가 기준이고 rem은 root요소의 font-size를 기준으로 합니다. vw와 vh는 뷰포트에 비례하며 각각 뷰포트의 너비의 1%, 높이의 1%를 기준으로 합니다. * viewport는 : 현재 브라우저 화면에서 보여지고 있는 다각형의 영역. 스크롤 내려야 보이는 부분은 뷰포트 x *rem: root em