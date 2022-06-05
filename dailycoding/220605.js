function firstReverse(str) {
  //문제 : 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.
  //입력 : 인자 1 : str // string 타입의 문자열
  //출력 : string 타입을 리턴해야 합니다.
  //힌트 : 배열은 arr.reverse를 통해 쉽게 뒤집을 수 있습니다.
  // 입출력예시 :
  // let output = firstReverse('codestates');
  // console.log(output); // "setatsedoc"

  // output = firstReverse('I love codestates');
  // console.log(output); // "setatsedoc evol I"
  // TODO: 여기에 코드를 작성합니다.
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}
//reference
// function firstReverse(str) {
//   return str.split('').reverse().join('');
// }
