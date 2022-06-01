//letterCapitalize
//문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.
//입력: 인자 1 : str
//출력: string 타입을 리턴해야 합니다.
//주의 사항: 단어는 공백으로 구분합니다. 연속된 공백이 존재할 수 있습니다. 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
//입출력 예시
let output1 = letterCapitalize("hello world");
console.log(output1); // "Hello World"
let output2 = letterCapitalize("javascript  is sexy ");
console.log(output2); // "Javascript  Is Sexy "
function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 빈문자열일 때는 빈 문자열 리턴
  //하나의 변수를 새로 선언하고, 여기에 str 공백을 기준으로 잘라준값 넣기
  //변수의 길이만큼 반복문 돌림
  //배열의 요소가 빈 문자열이 아닐때
  //공백을 기준으로 앞의 문자만 대문자로 바꾼다
  //배열을 문자열화해서 리턴
  if (str === "") {
    return "";
  }
  let toArr = str.split(" ");
  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i] !== "") {
      toArr[i] = toArr[i][0].toUpperCase() + toArr[i].substring(1);
    }
  }
  return toArr.join(" ");
}
