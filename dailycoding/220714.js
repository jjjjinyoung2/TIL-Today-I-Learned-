//문제 : 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
//입력 : 인자 1 : arr / number 타입을 요소로 갖는 배열 / arr[i]는 정수 / arr.length는 1,000 이하
//출력 : number 타입을 요소로 갖는 배열을 리턴해야 합니다. / 배열의 요소는 오름차순으로 정렬되어야 합니다. / arr[i] <= arr[j] (i < j)
//주의사항 : 삽입 정렬을 구현해야 합니다. / arr.sort 사용은 금지됩니다. / 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
//Advanced : insertionSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.
const insertionSort = function (arr, transform = (item) => item) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1; //1-0=0
    //앞의 값을 보도록 설정
    while (j >= 0 && transform(arr[j]) > transform(key)) {
      //나의 앞에 값이 현재 값보다 클 경우 while문 돌기
      arr[j + 1] = arr[j]; //0+1=1
      //나의 뒷 값 위치에 나를 넣어주고
      j = j - 1; //0-1=-1
      //j값을 줄여줘서 앞의 값에 접근할 수 있도록 하고
    }
    arr[j + 1] = key;
    //작았던 앞의 값을 나의 앞에 넣어주도록
  }
  return arr;
};
