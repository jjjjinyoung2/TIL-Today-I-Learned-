//문제:배열을 입력받아 모든 요소의 합을 리턴해야 합니다.
//입력:인자 1 : arr / number 타입을 요소로 갖는 배열
//출력:number 타입을 리턴해야 합니다. / arr[0] + arr[1] + ... + arr[n-1] / arr.length는 n
//주의사항:함수 arrSum은 재귀함수의 형태로 작성합니다. / 반복문(for, while) 사용은 금지됩니다. / 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//입력으로 들어오는 arr의 모든 요소는 정수 값을 갖는다고 가정합니다. / 빈 배열의 합은 0 입니다.
//입출력예시:
// let output = arrSum([-1, -2, 1, 3]);
// console.log(output); // --> 1
function arrSum(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr.length ===0){
      return 0
    }
    const head = arr[0];
    const tail = arr.slice(1);
  return head + arrSum(tail)
  }
  