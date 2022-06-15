function modulo(num1, num2) {
  // 문제 : 두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴해야 합니다.
  // 입력 : 인자 1 : num1 / number 타입의 정수 (num1 >= 0)
  // 인자 2 : num2 / number 타입의 정수 (num2 >= 0)
  // 출력 : number 타입을 리턴해야 합니다.
  // 주의사항 : 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다. / 0은 어떤 수로 나누어도 나머지가 0입니다. /어떤 수도 0으로 나눌 수 없습니다. 이 경우 'Error: cannot divide by zero'를 리턴해야 합니다.
  // 입출력예시 :
  //   let output = modulo(25, 4);
  // console.log(output); // --> 1
  // TODO: 여기에 코드를 작성합니다.
  // for 문을 활용하여 num1 을 계속 num2으로 나눠 나머지구한다.
  // num1이 num2 보다 클 때까지만 반복해서 뺀다.
  if (num1 === 0) {
    return 0;
  }
  if (num2 === 0) {
    return "Error: cannot divide by zero";
  }
  for (i = num1; i > 0; i = i - num2) {
    if (i < num2) {
      break;
    }
  }
  return i;
}
