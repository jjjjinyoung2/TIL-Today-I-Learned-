function computeSquareRoot(num) {
  // 문제 : 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.
  // 입력 : 인자 1 : num / number 타입의 정수 (num >= 2)
  // 출력 : number 타입을 리턴해야 합니다. / 최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)
  // 주의사항 : Math.sqrt 사용은 금지됩니다.
  // 입출력예시 :
  //   let output = computeSquareRoot(9);
  // console.log(output); // --> 3

  // output = computeSquareRoot(6);
  // console.log(output); // --> 2.45
  // TODO: 여기에 코드를 작성합니다.
  let gu = Math.floor(num / 2);
  let n = 0; //while문 조건식
  while (true) {
    n++;
    let div = num / gu;
    let dec = Number(div.toFixed(8));
    let average = (dec + gu) / 2;
    let checkNum = Math.floor(average);
    if (checkNum * checkNum === num) {
      return checkNum;
    } else if (average * average < num) {
      gu = average;
      break;
    }
    gu = average;
  }
  return Number(gu.toFixed(2));
}
