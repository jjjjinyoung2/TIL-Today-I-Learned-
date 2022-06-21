function decryptCaesarCipher(str, secret) {
  //문제 : 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
  //입력 : 인자 1 : str : string 타입의 알파벳 소문자 문자열 / 인자 2 : secret : number 타입의 암호화 키
  //출력 : string 타입을 리턴해야 합니다.
  //주의사항 : 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다. / 공백은 그대로 두어야 합니다.
  //1. 카이사르 암호로 된  str 입력받고
  //2. str을 복호화
  // 알파벳집합을 배열로 선언, 초기화한다.
  // str 반복 돌면서 str[i]에 접근
  // 알파벳.indexOf(str[i]) 이용해서 알파벳에 속한 index 가져오기
  // 가져온 index로 secret를 빼주면 복호화완성!
  // else index - secret 이 마이너스면 알파벳[0]에서 알파벳[25]로 이동
  // newStr += alphabet[index - secret]
  // newStr리턴
  // TODO: 여기에 코드를 작성합니다.
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let idx = 0;

  let newArr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newArr += " ";
    } else {
      idx = alphabet.indexOf(str[i]);
      if (idx - secret >= 0) {
        //1-2=-1
        newArr += alphabet[idx - secret];
      } else {
        newArr += alphabet[26 + (idx - secret)];
      }
    }
  }
  return newArr;
}
