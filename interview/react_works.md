리액트의 내부 작동 원리를 설명하세요
리액트는 내부적으로 reconciliation 과정을 통해 효율적으로 DOM을 업데이트시킵니다.
reconciliation 과정은 변경사항이 발생할 때마다 virtual DOM을 생성하여 이전 DOM과 비교한 후, 변경된 부분만 실제 DOM에 적용시키는 과정입니다. 변경된 부분만을 업데이트하기 때문에 보다 효율적으로 DOM을 업데이트시킬 수 있습니다.