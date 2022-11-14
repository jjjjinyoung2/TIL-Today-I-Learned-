innerHTML메서드와 textContent메서드의 차이에 대해서 설명해주세요.
innerHTML은 'Element'의 속성으로, element내에 포함 된 HTML 또는 XML 마크업을 가져오거나 태그와 함께 입력하여 내용을 직접 설정할 수 있기에 내부 HTML 코드를 JavaScript 코드에서 새 내용으로 쉽게 변경할 수 있습니다.
textContent는 'Node'의 속성으로, 사용자에게 보여지는 text값만 읽어오는 innetText와는 달리 <script>나 <style> 태그에 상관없이 해당 노드가 가지고 있는 텍스트 값을 모두 읽어옵니다.