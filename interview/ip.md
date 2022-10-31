IP 프로토콜의 한계에 대해서 설명해주세요.
IP프로토콜의 한계로는 비연결성, 비신뢰성이 있습니다. ip는 패킷 단위로 통신하며, ip패킷은 출발지ip주소,목적지ip주소의 정보를 포함하고 있습니다. 패킷은 전송될 때 목적지에 도착할때까지 인터넷 망의 많은 노드를 지나게 됩니다. 이때 패킷을 받을 대상이 없거나, 서비스 불능 상태여도 클라이언트는 서버의 상태를 파악할 방법이 없기 때문에 패킷을 그대로 전송하게 됩니다. 이것을 비연결성이라고 합니다. 또한 데이터를 전달하던 중 장애가 생겨 패킷이 중간에 소실되더라도 클라이언트는 이를 파악할 수 없습니다. 목적지에서도 패킷의 순서가 바뀌거나 소실된 상태로 도착할 수 있습니다. 이를 비신뢰성이라고 합니다. 