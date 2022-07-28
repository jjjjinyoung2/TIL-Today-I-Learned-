//문제 : 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
//입력 : 인자 1 : arr / number 타입을 요소로 갖는 배열 / arr[i]는 -100,000 이상 100,000 이하의 정수 / arr.length는 100,000 이하
//출력 : number 타입을 요소로 갖는 배열을 리턴해야 합니다.
//주의사항 : 힙 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 최소 힙(min heap)을 구현해야 합니다.
// 최소 힙 구현을 위해 선언된 함수들(getParentIdx, insert, removeRoot)을 전부 완성해야 합니다.
// swap, getParentIdx, insert, removeRoot를 전부 사용해야 합니다.
// swap, binaryHeap을 수정하지 않아야 합니다.
// 테스트 케이스에서 힙 함수들을 정확히 구현했는지 함께 테스트합니다.
// removeRoot의 시간 복잡도는 O(logN)입니다.
// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  if (heap.length > 1) {
    let curIdx = heap.length - 1;
    let pIdx = getParentIdx(curIdx);
    while (pIdx >= 0 && heap[curIdx] < heap[pIdx]) {
      swap(curIdx, pIdx, heap);
      curIdx = pIdx;
      pIdx = getParentIdx(curIdx);
    }
  }
  return heap;
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  swap(0, heap.length - 1, heap);
  heap.pop();
  if (heap.length === 0) return [];

  let curIdx;
  let minIdx = 0;
  while (curIdx !== minIdx) {
    curIdx = minIdx;
    let left = curIdx * 2 + 1;
    let right = curIdx * 2 + 2;
    if (left < heap.length && heap[left] < heap[minIdx]) {
      minIdx = left;
    }

    if (right < heap.length && heap[right] < heap[minIdx]) {
      minIdx = right;
    }

    swap(curIdx, minIdx, heap);
  }

  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  const sorted = [];
  while (minHeap.length > 0) {
    sorted.push(minHeap[0]);
    minHeap = removeRoot(minHeap);
  }
  return sorted;
};
