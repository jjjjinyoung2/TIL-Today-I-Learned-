//배열이 특정값을 포함하고 있는지의 여부를 boolean 값으로 반환합니다.
const arr = [1, 2];

arr.includes(1); // true
//arr[0]의 값이 1이므로 true를 리턴합니다.

arr.includes(3); // false
//arr에는 3이라는 값이 없으므로 false를 리턴합니다.

arr.includes(1, 1); // false
//arr[1] 이후에는 1이라는 값이 없으므로 false를 리턴합니다.

arr.includes(1, 2); // false
//두 번째 파라미터인 fromIndex에 배열의 길이보다 크거나 같은 값이 들어가면 무조건 false를 리턴합니다.
//여기서 배열의 길이는 2인데, fromIndex 자리에 2가 들어갔으므로 false가 리턴되었습니다.

arr.includes(2, -1); // true
//fromIndex 자리에 음수가 들어가면, 실제 시작 index는 '배열의 길이 + fromIndex'로 계산됩니다.
//배열의 길이는 2이고, fromIndex는 -1이므로,
//실제 검색을 시작하는 index는 1이 됩니다.  (2 + (-1))
//arr[1]에 2가 있으므로, true가 리턴 되었습니다.
