function insertDash(str) {
  //문제 : 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.
  //입력 : 인자1 : str / string타입의 숫자 문자열
  //출력 : string 타입을 리턴해야합니다.
  //주의사항 : 0은 짝수로 간주합니다.
  //입출력예시 :
  //   let output = insertDash('454793');
  // console.log(output); // --> 4547-9-3
  //수도코드 //
  //문자열 길이만큼 반복
  //조건 : 문자열 중에 홀수 + 홀수 일 경우 "-" 더해서 result에 넣는다
  //아닐경우는 str[i]만 result에 더해준다
  // TODO: 여기에 코드를 작성합니다.
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + str[i];
    if (str[i] % 2 === 1 && str[i + 1] % 2 === 1) {
      result = result + "-";
    }
  }
  return result;
}
