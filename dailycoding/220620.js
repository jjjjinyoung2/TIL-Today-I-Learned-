// TODO: 여기에 코드를 작성합니다.
// 처음했던 생각
// 문자열을 입력받는데 숫자를 모두 찾는다. for문
// number를 리턴
// 숫자를 더한다.
// 숫자와 공백을 제외한 문자열의 길이로 나눈다
// 정수로 반올림한다.
// includes 이용한다.
function numberSearch(str) {
  const digits = "0123456789";

  if (str === "") {
    return 0;
  }

  let sum = 0;
  let pureStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (digits.includes(str[i])) {
      // 숫자인 경우
      sum = sum + Number(str[i]);
    } else if (str[i] !== " ") {
      // 숫자도 공백도 아닌 경우
      pureStr = pureStr + str[i];
    }
  }

  // 결과를 반올림 한다.
  return Math.round(sum / pureStr.length);
}
