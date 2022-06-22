function compressString(str) {
  // 문제 : 문자열을 입력받아 연속되는 문자가 있을 경우,
  // 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.
  // 입력 : 인자 1 : str / string 타입의 알파벳 문자열
  // 출력 : string 타입을 리턴해야 합니다.
  // 주의사항 : 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다. / 3개 이상 연속되는 문자만 압축합니다.
  // 입출력예시
  //   let output = compressString('abc');
  // console.log(output); // --> abc

  // output = compressString('wwwggoppopppp');
  // console.log(output); // --> 3wggoppo4p
  // 1. 문자열을 입력받는다.
  // 2. 문자열에서 반복되는 문자 3개 이상 있는 경우 (반복되는 수  + 문자)로 표현한다.
  // str이 빈 문자열이면 빈문자열 리턴
  // str 돌면서 현재 str[idx]와 str[ind+1]문자 비교
  // 같으면 count 다르면 count >=3 을 확인
  // true이면 newStr = count + str[idx]
  // false이면 newStr += count 수만큼 str[idx]를 더해준다.
  // 3. newStr 리턴
  // TODO: 여기에 코드를 작성합니다.
  let count = 1;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else if (count >= 3 && str[i] !== str[i + 1]) {
      newStr += count + str[i];
      count = 1;
    } else {
      for (let j = 1; j <= count; j++) {
        newStr += str[i];
      }
      count = 1;
    }
  }
  return newStr;
}
