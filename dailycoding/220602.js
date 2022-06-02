function convertListToObject(arr) {
  //문제: 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.
  //입력: 인자 1 : arr /배열을 요소로 갖는 배열/arr[i]는 string 타입을 요소로 갖는 배열/ arr[i].length는 0 또는 2
  //출력: arr[i]의 첫 번째 요소를 키, 두 번째 요소를 값으로 하는 객체를 리턴해야 합니다.
  //주의사항: 중복되는 키의 경우, 초기의 값을 사용합니다./빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다./arr[i]의 길이가 0인 경우, 무시합니다.
  //입출력 예시 : const arr = [
  //   ['make', 'Ford'],
  //   ['model', 'Mustang'],
  //   ['year', '1964'],
  //   ['make', 'Bill'],
  // ];

  // let output = convertListToObject(arr);

  // console.log(output) // -->
  // {
  //   make : 'Ford'
  //   model : 'Mustang',
  //   year : '1964'
  // }
  // TODO: 여기에 코드를 작성합니다.
  // 빈객체를 선언
  // 빈배열을 입력받는 경우 빈 객체 리턴
  // 반복문을 돌며 arr배열 순회
  // 조건 : 중복 되는 키가 없고 arr[i]의 길이가 0이 아닌경우에
  // arr[i]의 첫번째 요소를 키로 두번째 요소를 값으로 넣어준다.
  let obj = {};
  if (arr.length === 0) {
    return obj;
  }
  for (let i in arr) {
    if (arr[i].length !== 0 && obj[arr[i][0]] === undefined) {
      obj[arr[i][0]] = arr[i][1];
    }
  }
  return obj;
}

// Reference
// function convertListToObject(arr) {
//     let result = {};

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
//         result[arr[i][0]] = arr[i][1];
//       }
//     }

//     return result;
//   }
