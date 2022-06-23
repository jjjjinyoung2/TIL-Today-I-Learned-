const largestProductOfThree = function (arr) {
  //문제 : 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
  //입력 : 인자 1 : arr / number 타입을 요소로 갖는 임의의 배열
  //출력 : number 타입을 리턴해야 합니다.
  //주의사항 : 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
  //배열의 요소는 음수와 0을 포함하는 정수입니다.
  //배열의 길이는 3 이상입니다.
  //입출력예시
  //   let output = largestProductOfThree([2, 1, 3, 7]);
  // console.log(output); // --> 42 (= 2 * 3 * 7)
  // output = largestProductOfThree([-1, 2, -5, 7]);
  // console.log(output); // --> 35 (= -1 * -5 * 7)

  //순서에 따라 배열을 정렬한다.
  //앞에서3자리까지곱/뒤에서3자리곱하기
  //그 중 큰 것을 리턴
  // TODO: 여기에 코드를 작성합니다.
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;

  const x1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const x2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(x1, x2);
};
