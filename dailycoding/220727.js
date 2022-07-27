//문제 : 정수를 요소로 갖는 배열을 입력받아 이진 힙(binary heap)*을 리턴해야 합니다.
// 이진 힙(binary heap)은 노드의 값이 특정한 순서를 가지고 있는 완전 이진 트리(Complete Binary Tree)입니다.
// 완전 이진 트리는 이진 트리의 (마지막 레벨 또는 마지막 깊이를 제외하고) 모든 레벨이 노드로 가득 채워져 있어야 합니다. 마지막 레벨은 왼쪽부터 차례대로 채워져 있습니다.
// 이진 힙에서 부모 노드의 값이 (이진 트리이므로 2개의) 자식 노드의 값보다 큰 경우를 최대 힙(max heap), 반대의 경우를 최소 힙(min heap)이라고 합니다.
//입력 : 인자 1 : arr / number 타입을 요소로 갖는 배열 / arr[i]는 -100,000 이상 100,000 이하의 정수 / arr.length는 100,000 이하
//출력 : number 타입을 요소로 갖는 배열을 리턴해야 합니다.
//주의사항 : 최대 힙(max heap)을 구현해야 합니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 최대 힙 구현을 위해 선언된 함수들(getParentIdx, insert)을 전부 완성해야 합니다.
// swap, getParentIdx, insert를 전부 사용해야 합니다.
// swap, binaryHeap을 수정하지 않아야 합니다.
// 테스트 케이스에서 힙 함수들을 정확히 구현했는지 함께 테스트합니다.
// insert의 시간 복잡도는 O(logN)입니다.
// 주어진 배열을 내림차순으로 정렬(O(logN))해도 최대 힙의 조건을 만족합니다. 하지만 이는 insert를 구현하는 것과는 거리가 먼 방법이며, 테스트를 통과할 수도 없습니다.
// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  let curIdx = heap.length - 1;
  let pIdx = getParentIdx(curIdx);
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
    swap(curIdx, pIdx, heap);
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
