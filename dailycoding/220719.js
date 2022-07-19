//문제 : 2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.
//입력 : 인자 1 : matrix / 가로 길이(matrix[i].length)와 세로 길이(matrix.length)가 모두 N인 2차원 배열 / matrix[i][j]는 number 타입
//출력 : 2차원 배열을 리턴해야 합니다.
//Advanced : 세로와 가로의 길이가 각각 M, N인 2차원 M X N 배열을 시계방향으로 90도씩 K번 회전시킨 배열을 리턴해 보세요. 회전수가 두 번째 입력으로 주어집니다.
const rotateMatrix = function (matrix, k = 1) {
  // TODO: 여기에 코드를 작성합니다.
  if (matrix.length === 0) return matrix;

  for (let i = 0; i < k; i++) {
    // k번 실시
    matrix = rotate(matrix);
  }

  return matrix;
};

const rotate = (matrix) => {
  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let array = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      array.push(matrix[j][i]);
    }
    result.push(array);
  }

  return result;
};

// const rotateMatrix = function (matrix) {
//   const N = matrix.length;
//   const M = matrix[0] && matrix[0].length;
//   let output = [];

//   for (let row = 0; row < M; row++) {
//     output[row] = [];
//     for (let col = 0; col < N; col++) {
//       output[row][col] = matrix[N - col - 1][row];
//     }
//   }

//   return output;
// };

// const rotateMatrix = function (matrix, rotateNum = 1) {
//     // rotateNum 이 0일 수 있으므로 아래와 같은 초기화는 지양해야 함
//     // rotateNum = rotateNum || 1
//     const N = matrix.length;
//     // 빈 배열을 입력받을 수 있다.
//     const M = matrix[0] && matrix[0].length;

//     rotateNum = rotateNum % 4;
//     // 회전하지 않는다.
//     if (rotateNum === 0) return matrix;

//     const rotated = [];
//     // 홀수번 회전 시 M x N, 짝수번 회전 시 N x M
//     const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

//     for (let row = 0; row < RC[0]; row++) {
//       rotated[row] = [];
//       for (let col = 0; col < RC[1]; col++) {
//         if (rotateNum === 1) rotated[row][col] = matrix[N - col - 1][row];
//         else if (rotateNum === 2)
//           rotated[row][col] = matrix[N - row - 1][M - col - 1];
//         else rotated[row][col] = matrix[col][M - row - 1];
//       }
//     }

//     return rotated;
//   };
