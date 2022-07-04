//문제 : 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 합니다.
//이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.
//입력 : 인자 1 : node / 'value', 'children' 속성을 갖는 객체 (Node) / 'node.value'는 number 타입 / 'node.children'은 Node를 요소로 갖는 배열
//출력 : 배열을 리턴해야합니다.
//주의사항 : 생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.
let bfs = function (node) {
  //이중배열이 있으면 이중배열 값을 순서대로 string값으로 나타낸다.
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let queue = [node];

  while (queue.length > 0) {
    //노드 값을 지우면서 반복문 돌리기
    let target = queue.shift(); //노드 앞부분을 target에 옮겨서
    result.push(target.value); //노드 앞부분을 result에 푸쉬

    for (let i = 0; i < target.children.length; i++) {
      //target의 children 값의 길이만큼
      queue.push(target.children[i]); // target의 children 값을 차례로 queue에 푸쉬
    }
  }
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
