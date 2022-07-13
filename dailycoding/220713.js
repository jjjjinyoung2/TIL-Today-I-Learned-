//문제 : 하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.
//입력 : 인자 1 : str / string 타입의 공백이 없는 알파벳 소문자 문자열
//출력 : 배열(arr)을 리턴해야 합니다. / arr[i]는 각 부분집합의 원소로 구성된 문자열
//주의사항 : arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
//arr[i]는 알파벳 순서로 정렬되어야 합니다.
//집합은 중복된 원소를 허용하지 않습니다.
//부분집합은 빈 문자열을 포함합니다.
//arr은 사전식 순서(lexical order)로 정렬되어야 합니다.
//입출력 예시
// let output1 = powerSet('abc');
// console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

// let output2 = powerSet('jjump');
// console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
const powerSet = function (str) {
  //멱집합구하기!
  // TODO: 여기에 코드를 작성합니다.
  let arr = str.split("").sort(); //문자열을 분리해서 배열로 만들어주고 정렬해준다.
  let result = [""]; //결과가 담길 배열

  let aux = (target, result) => {
    //result에서 target을 추가한 인자들을 result에 추가해주는 함수
    let copy = result.slice();
    for (let i = 0; i < copy.length; i++) {
      copy[i] += target;
      result.push(copy[i]);
    }
    return result;
  };

  for (let i = 0; i < arr.length; i++) {
    //arr의 값들을 전부 넣어서 aux함수 실행
    if (!result.includes(arr[i])) {
      //중복값이 아닌 경우에만 실시
      aux(arr[i], result);
    }
  }
  return result.sort(); //결과를 정렬해서 반환
};
//reference
const powerSet = function (str) {
  // 정렬
  const sorted = str.split("").sort();

  // 중복 제거
  const deduplicated = sorted.reduce((acc, item) => {
    if (acc[acc.length - 1] === item) {
      return acc;
    } else {
      return acc.concat(item);
    }
  });

  let subSets = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === deduplicated.length) {
      // 마지막 문자까지 검토한 경우
      subSets.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);

    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + deduplicated[idx]);
  };

  pickOrNot(0, "");

  return subSets.sort();
};
