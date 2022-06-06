function firstCharacter(str) {
  //문제 : 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.
  //입력 : 인자 1 : str / string 타입의 공백이 있는 알파벳 문자열
  //출력 : string 타입을 리턴해야 합니다.
  //주의사항 : 단어는 공백 한 칸으로 구분합니다. / 연속된 공백은 없다고 가정합니다. / 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
  //입출력예시
  //   let output = firstCharacter('hello world');
  // console.log(output); // --> "hw"

  // output = firstCharacter(
  //   'The community at Code States might be the biggest asset'
  // );
  // console.log(output); // --> "TcaCSmbtba"
  // TODO: 여기에 코드를 작성합니다.
  //str이 빈 문자열일때 빈문자열 리턴
  if (str === "") {
    return "";
  }
  //문자열을 빈칸으로 나눠준다
  let word = str.split(" ");
  //나눠준 단어를 반복문 돌린다
  //단어들의 첫단어 가져온다
  //첫글자들로만 만들어진 문자열 가져온다
  let firstword = "";
  for (let i = 0; i < word.length; i++) {
    firstword = firstword + word[i][0];
  }
  return firstword;
}
