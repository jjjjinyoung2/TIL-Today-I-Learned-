하위 컴포넌트로 데이터를 전달하기 위해 계속해서 props를 전달해 나가야하는 과정을 말합니다. 이 것은 데이터의 흐름을 쉽게 추적할 수 있다는 장점이 있지만 계층 구조로된 컴포넌트들을 분리하기가 어렵고, props가 변경되면 많은 코드를 수정해야 합니다. 이를 해결하기 위해서 redux, contextAPI 같은 글로벌 상태 관리 모듈을 사용하는 방법이 있습니다.