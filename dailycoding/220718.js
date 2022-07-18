//문제 : 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
//입력 : 인자 1 : arr / number 타입을 요소로 갖는 배열 / arr[i]는 정수 / arr.length 100,000 이하
//출력 : number 타입을 요소로 갖는 배열을 리턴해야 합니다. / 배열의 요소는 오름차순으로 정렬되어야 합니다. / arr[i] <= arr[j] (i < j)
//주의사항 : 병합 정렬을 구현해야 합니다. / arr.sort 사용은 금지됩니다. / 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
const mergeSort = function (arr) {
  // 쪼갠 배열에서 오름차순으로 정렬시켜줄 함수 merge 생성
  const merge = (left, right) => {
    const resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArr.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArr.push(right[rightIndex]);
        rightIndex++;
      }
    }
    // left, right 둘 중 하나의 배열의 숫자가 남고 while문이 끝날 수 있기 때문에
    // 마지막으로 concat으로 뒤에 남은 큰 숫자들을 넣어준다.
    // silce(Index)에서 배열의 마지막 Index라면 빈 배열을 넣게됨.
    return resultArr.concat(left.slice(leftIndex), right.slice(rightIndex));
  };
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  // 기존배열을 쪼개고 쪼개는 과정
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};
