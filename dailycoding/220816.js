//07_[조합] 블랙잭은 지겨워
//문제 : 평범한 블랙잭 게임에서 수시로 패배하자 흥미가 떨어진 김코딩은 박타짜에게 게임룰을 변형하여 새로운 카드 놀이를 해 볼 것을 제안합니다.
// 새로운 룰은 다음과 같습니다.

// 1. 숫자로 이루어진 카드를 여러 장 받습니다.
// 2. 3장씩 카드를 고르고, 3장에 적힌 숫자들의 합이 소수인지 확인합니다.
// 3. 받아든 카드로 만들 수 있는 소수의 개수가 많은 사람이 이기게 됩니다.
// 예로, [1, 2, 3, 4]라는 카드를 받았을 때 만들 수 있는 숫자는 6, 7, 8, 9이고, 소수는 7 하나이기 때문에 가지고 있는 소수의 개수는 1개입니다.
// [2, 3, 4, 8, 13]라는 카드를 받았을 때 만들 수 있는 숫자는 9, 13, 18, 14, 19, 23, 15, 20, 24, 25이고, 소수는 13, 19, 23 총 3개이기 때문에 가지고 있는 소수의 개수는 3개입니다.

// 게임을 진행하기 전에 소수에 대해 아무런 지식이 없는 박타짜는 게임을 며칠 미룬 뒤, 게임의 룰을 따르는 함수를 만들기로 했습니다.
// 소수에 약한 박타짜를 도와 여러 장의 카드 중 세 장씩 조합해 소수가 되는 경우의 수를 리턴하는 함수를 완성해 주세요.
//입력 : 인자 1 / cards: Array 3개 이상 50개 이하의 카드가 숫자로 들어 있는 배열
//출력 : Number 타입을 리턴해야 합니다.
//주의사항 : cards 에는 중복된 숫자의 카드는 들어있지 않습니다. / 각 카드에 적힌 수는 1이상 1,000이하의 자연수입니다.
//입출력예시
// let output = boringBlackjack([1, 2, 3, 4]);
// console.log(output); // 1

// let output = boringBlackjack([2, 3, 4, 8, 13]);
// console.log(output); // 3
function boringBlackjack(cards) {
  let count = 0;

  // 1. cards 에서 카드 3장 뽑기
  let length = cards.length;
  // 카드 뽑는 방식은 첫 카드를 cards 의 0번 index 부터 고정해 놓고 1씩 뒤로 옮겨간다
  for (let i = 0; i < length; i++) {
    // 두 번째 카드의 인덱스는 첫 카드 + 1에서 시작해야 하고
    for (let j = i + 1; j < length; j++) {
      // 세 번째 카드의 인덱스는 두 번째 카드 + 1에서 시작해야 한다
      for (let k = j + 1; k < length; k++) {
        const number = cards[i] + cards[j] + cards[k];
        // 세 카드의 합이 소수이면 경우의 수 + 1
        if (isPrime(number)) count++;
      }
    }
  }

  //2. 소수 판별
  function isPrime(number) {
    // 2부터 비교하기 시작해서 나누어 떨어지는 수가 있으면 소수가 아니다
    // for 문 조건을 number/2 로 해도 되는 이유는 i > number/2 가 되면 몫이 절대 0이 될수 없기 때문에
    // number/2 까지만 비교해 보아도 소수 판별이 가능하다
    for (let i = 2; i < number / 2; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return count;
}
