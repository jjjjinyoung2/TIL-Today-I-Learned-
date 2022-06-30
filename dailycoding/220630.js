//문제 : 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다.
//이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.
//입력 : 인자 1 : node
//'value', 'children' 속성을 갖는 객체 (Node)
//'node.value'는 number 타입
//'node.children'은 Node를 요소로 갖는 배열
//출력 : 배열을 리턴해야합니다.
//주의사항 : 생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.
let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  //부모 노드의 value를 배열에 담고 만약 children이 있으면
  //각각의 children 값을 배열에 담아 부모 node value가 있는 배열의 뒤에 추가
  let value = [node.value];
  node.children.forEach((n) => {
    value = value.concat(dfs(n));
  });
  return value;
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
