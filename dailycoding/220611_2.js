function computeWhenDouble(interestRate) {
  //문제 : 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.
  //입력 : 인자 1 : interestRate / number 타입의 연이율 (%)
  //출력 : number 타입을 리턴해야 합니다.
  //입출력예시 :
  //   let output = computeWhenDouble(7);
  // console.log(output); // --> 11

  // output = computeWhenDouble(10);
  // console.log(output); // --> 8
  // TODO: 여기에 코드를 작성합니다.
  // 원금이 1 이 있다.
  // 이자는 원금 * 연이율 1* interestRate/100
  // 원금 + 이자 가 원금의 2배인가?
  // 맞다 시간을 리턴
  // 아니다 1년의 이자를 더해준다.
  let 원금 = 1;
  let 이자 = 1 + interestRate / 100;
  let year = 0;
  while (원금 < 2) {
    원금 = 원금 * 이자;
    year++;
  }
  return year;
}
// reference
// function computeWhenDouble(interestRate) {
//   let rate = 1 + interestRate / 100;
//   let principal = 1;
//   let year = 0;
//   while (principal < 2) {
//     principal = principal * rate;
//     year++;
//   }
//   return year;
// }
