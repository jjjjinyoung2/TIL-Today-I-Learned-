function superIncreasing(arr) {
  //문제 : 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.
  //입력 : 인자 1 : arr / 수를 요소로 갖는 배열 / arr[i]는 정수
  //출력 : boolean 타입을 리턴해야 합니다. / arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.
  //입출력예시 :
  // let output = superIncreasing([1, 3, 6, 13, 54]);
  // console.log(output); // --> true

  // output = superIncreasing([1, 3, 5, 9]);
  // console.log(output); // --> false
  //수도코드
  //for문 반복하여 인덱스 순서대로 sum에 더해준다.
  //더하기 반복이 마친 후 다음 인덱스와 sum을 비교
  //sum이 다음 인덱스보다 크거나 같은 경우 false를 리턴
  //아니면 true 리턴
  // TODO: 여기에 코드를 작성합니다.
  let sum = arr[0];
  let result;
  for (let i = 1; i < arr.length; i++) {
    result = true;
    sum += arr[i];
    if (sum >= arr[i + 1]) {
      result = false;
      break;
    }
  }
  return result;
}
