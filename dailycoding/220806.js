//문제 : 배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.
//입력 : 인자 1 : arr / 임의의 요소를 갖는 배열
//출력 : 순서가 뒤집힌 배열을 리턴해야 합니다.
// [arr[n-1], arr[n-2], ... , arr[0]]
// arr.length는 n
//주의사항 : 함수 reverseArr는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 배열은 빈 배열 그대로를 리턴해야 합니다.
function reverseArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return arr;
  }
  const len = arr.length - 1;
  return [arr[len]].concat(reverseArr(arr.slice(0, len)));
}
