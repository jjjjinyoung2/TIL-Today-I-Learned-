//문제 : 세로와 가로의 길이가 각각 M, N인 마을지도가 배열로 주어졌을 때, '1'은 주민이 있는 집을 의미하고 '0'은 주민이 없는 땅을 의미합니다.
//이 마을은 소문이 시작되면 하루에 상하좌우 한 칸 바로 옆에 있는 집으로 퍼집니다.
//특정 주민의 집 (R, C)으로부터 어떤 소문이 시작될 경우, 마을 전체로 소문이 퍼지는데 걸리는 시간(일)을 리턴해야 합니다.
//입력 : 인자 1 : village / string 타입을 요소로 갖는 배열 / village.length는 M / village[i]는 string 타입 / village[i].length는 N / village[i][j]는 세로로 i, 가로로 j인 지점의 정보를 의미 / village[i][j]는 '0' 또는 '1'
//인자 2: row / number 타입의 0 이상의 정수 / 소문이 시작되는 집의 세로 위치
//인자 3: col / number 타입의 0 이상의 정수 / 소문이 시작되는 집의 가로 위치
//출력 : number 타입을 리턴해야 합니다.
//주의사항 : M, N은 100 이하의 자연수입니다. / row, col에는 항상 주민이 살고 있습니다. / 모든 집은 연결되어 있습니다. 즉, 한 집에서 다른 집으로 가는 경로가 항상 존재합니다. / village를 그래프로 구현하는 함수가 주어집니다.
const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.
  // bfs 구현을 위해 큐를 선언한다.
  // enQueue, deQueue시마다 인덱싱을 다시 하지 않기 위해
  // 순환 큐(circular queue)로 구현한다.
  // queue의 가능한 최대 크기만큼 배열을 선언한다.
  // 문제의 특성에 따라 큐에는 좌표 평면의 한 점이 삽입되고, 한번 삽입된 요소는 두 번 다시 삽입되지 않는다.
  const R = village.length;
  const C = village[0].length;
  const matrix = createMatrix(village);
  const MOVES = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, 1], // RIGHT
    [0, -1], // LEFT
  ];
  const MAX_SIZE = R * C; // 가능한 모든 좌표의 크기만큼 큐가 선언되었으므로, 사실 순환큐일 필요는 없다.
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
  const queue = Array(MAX_SIZE);
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    // 실행 중에 큐가 가득차지는 않기 때문에 별도의 조건문을 작성할 필요가 없다.
    queue[rear] = pos;
    // 모듈러스 연산을 할 필요도 사실 없다.
    rear = (rear + 1) % MAX_SIZE;
  };
  const deQueue = (queue) => {
    const pos = queue[front];
    // 모듈러스 연산을 할 필요도 사실 없다.
    front = (front + 1) % MAX_SIZE;
    return pos;
  };

  let cnt = 0;
  enQueue(queue, [row, col]);
  // 소문이 퍼지는 데 걸리는 시간을 저장한다.
  matrix[row][col] = 0;
  while (isEmpty(queue) === false) {
    // 큐의 가장 앞 자리의 좌표를 얻는다.
    const [row, col] = deQueue(queue);
    cnt = matrix[row][col];

    // 현재 지점을 기준으로 네 방향을 검토한다.
    MOVES.forEach((move) => {
      const [rDiff, cDiff] = move;
      const nextRow = row + rDiff;
      const nextCol = col + cDiff;
      if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === "1") {
        enQueue(queue, [nextRow, nextCol]);
        matrix[nextRow][nextCol] = matrix[row][col] + 1;
      }
    });
  }
  return cnt;
};
