function powerOfTwo(num) {
  //문제 : 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.
  //입력 : 인자 1 : num / number 타입의 정수 (num >= 1)
  //출력 : boolean 타입을 리턴해야 합니다.
  //주의사항 : 반복문(while)문을 사용해야 합니다.
  //2의 0승은 1입니다.
  //Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.
  //입출력예시 :
  //let output1 = powerOfTwo(16);
  //console.log(output1); // true
  //let output2 = powerOfTwo(22);
  //console.log(output2); // false
  // TODO: 여기에 코드를 작성합니다.

  //num이 1일 경우에 무조건 true
  if (num === 1) {
    return true;
  }
  //num이 홀수면 무조건 false
  if (num % 2 !== 0) {
    return false;
  }
  //2를 거듭제곱해서 비교할 수 있는 초기값은 2
  let powerNum = 2;

  //powerNum이 num보다 작을때까지 while문 진행
  while (powerNum < num) {
    powerNum *= 2;
  }
  //반복이 끝나면 powerNum과 num이 같은지 리턴
  return powerNum === num;
}
