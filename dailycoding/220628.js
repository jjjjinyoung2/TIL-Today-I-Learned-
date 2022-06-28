//문제: 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.
//입력: 인자 1 : base / number 타입을 요소로 갖는 임의의 배열 /base.length는 100 이하
//     인자 2 : sample / number 타입을 요소로 갖는 임의의 배열 / sample.length는 100 이하
//출력: boolean 타입을 리턴해야 합니다.
//주의사항: base, sample 내에 중복되는 요소는 없다고 가정합니다.
//입출력예시
// let base = [1, 2, 3, 4, 5];
// let sample = [1, 3];
// let output = isSubsetOf(base, sample);
// console.log(output); // --> true

// sample = [6, 7];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

// base = [10, 99, 123, 7];
// sample = [11, 100, 99, 123];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false
const isSubsetOf = function (base, sample) {
  //sample에 들어있는 숫자 중 하나라도 base에 없으면 false 하려했으나 시간복잡도 고려 안해서 오류발생
  // TODO: 여기에 코드를 작성합니다.
  base.sort();
  sample.sort();
  for (let i = 0; i < base.length; i++) {
    if (base[i] === sample[0]) {
      let num = sample.shift();
    }
  }
  if (sample.length === 0) {
    return true;
  }
  return false;
};
