//문제 : 길이가 m, n이고 오름차순으로 정렬되어 있는 자연수 배열들을 입력받아 전체 요소 중 k번째 요소를 리턴해야 합니다.
//입력 : 인자 1 : arr1 / 자연수를 요소로 갖는 배열 / arr1.length는 m
//인자 2 : arr2 / 자연수를 요소로 갖는 배열 / arr2.length는 n
//인자 3 : k / number 타입의 0 이상의 정수
//출력 : number 타입을 리턴해야 합니다.
//주의사항 : 두 배열의 길이의 합은 1,000,000 이하입니다. / 어떤 배열 arr의 k번째 요소는 arr[k-1]을 의미합니다.
//힌트 : 이진 탐색(binary search)을 응용하여 해결합니다.
// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//   // TODO: 여기에 코드를 작성합니다.
//   let count = 0
//   left = 0
//   right = 0
//   let target
//   while(count<k){
//     if(arr1[left]<arr2[right]){
//       target = arr1[left];//해당 값을 찾기위해 계속 진행되고 count도 증가.
//       //while문을 벗어나는 순간 인덱스의 값이 나온다
//       left++
//     } else{
//       target = arr2[right]//해당 값을 찾기위해 계속 진행되고 count도 증가.
//       //while문을 벗어나는 순간 인덱스의 값이 나온다
//       right++
//     }
//     count++
//   }
//   return target
// };
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let leftIdx = 0,
    rightIdx = 0;

  while (k > 0) {
    // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.
    let cnt = Math.ceil(k / 2);
    let leftStep = cnt,
      rightStep = cnt;

    // 엣지 케이스
    // 카운트가 남았음에도 배열의 끝에 도달하면 k를 나머지 배열쪽으로 넘긴다.
    if (leftIdx === arr1.length) {
      rightIdx = rightIdx + k;
      break;
    }

    if (rightIdx === arr2.length) {
      leftIdx = leftIdx + k;
      break;
    }

    // 엣지 케이스
    // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, leftStep(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
    if (cnt > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
    if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

    // 두 배열의 현재 검사 요소 위치를 비교해서, 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      leftIdx = leftIdx + leftStep;
      // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
      k = k - leftStep;
    } else {
      rightIdx = rightIdx + rightStep;
      k = k - rightStep;
    }
  }

  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);
};
