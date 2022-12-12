요소 노드를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리의 노드를 옮겨다니며 부모,형제,자식노드 등을 탐색해야 할 때가 있다.

<ul>
    <li class = "apple">Apple</li>
    <li class = "banana">Banana</li>
    <li class = "orange">Orange</li>
</ul>

ul#fruits 요소는 3개의 자식요소를 갖는다. 이때 먼저 ul#fruits 요소 노드를 취득한 다음, 자식 노드를 모두 탐색하거나 자식 노드 중 하나만 탐색할 수 있다. li.banana 요소는 2개의 형제 요소와 부모요소를 갖는다. 이때 먼저 li.banana요소 노드를 취득한 다음, 형제 노드를 탐색하거나 부모 노드를 탐색할 수 있다. 
이처럼 DOM 트리 상의 노드를 탐ㅁ색할 수 있도록 Node,Element 인터페이스는 트리탐색 프로퍼티를 제공한다.