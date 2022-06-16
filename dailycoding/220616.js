function isIsogram(str) {
  // 문제 : 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.
  // 입력 : 인자 1 : str / string 타입의 공백이 없는 알파벳 문자열
  // 출력 : boolean 타입을 리턴해야 합니다.
  // 주의사항 : 빈 문자열을 입력받은 경우, true를 리턴해야 합니다. / 대소문자는 구별하지 않습니다.
  // 입출력예시
  //   let output = isIsogram('aba');
  // console.log(output); // false

  // output = isIsogram('Dermatoglyphics');
  // console.log(output); // true

  // output = isIsogram('moOse');
  // console.log(output); // false
  // TODO: 여기에 코드를 작성합니다.
  // 문자열 대문자로 정리
  // for문으로 인덱스와 인덱스+1 값 비교
  // 외부 for문은 마지막 인덱스 전까지
  if (str === "") {
    return true;
  }
  let newStr = str.toUpperCase();
  for (let i = 0; i < newStr.length - 1; i++) {
    for (let j = i + 1; j < newStr.length; j++) {
      if (newStr[i] === newStr[j]) {
        return false;
      }
    }
  }
  return true;
}
