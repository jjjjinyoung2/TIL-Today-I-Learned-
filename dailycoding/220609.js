// function removeExtremes(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   //문자열을 배열로 갖는 배열을 입력받는다.
//   //요소 중 가장 긴 문자열과 짧은 문자열 확인
//   //가장짧은,가장 긴 문자열 제외
//   //배열리턴
// let minLength = arr[0] //a, aaa
// for(let i = 0; i<arr.length+1; i++){
//   if(minLength.length>=arr[i].length){//만약 다음게 같거나 작으면
//     minLength = arr[i] //바꿔
//   }
//   if(minLength.length < arr[i].length){ //다음게 크면
//     minLength = minLength //그냥 둬
//   }
// }
// let maxLength = arr[0]//a,aaa
// for(let j = 1; j<arr.length+1; j++){
//   if(maxLength<=arr[j].length){ //다음게 같거나 크면
//     maxLength = arr[j] //바꿔
//   }
//   if(maxLength.length > arr[j].length){ //다음게 작으면
//     maxLength = maxLength //그냥나눠
//   }
// }
// let result = [] //새로운 배열을 만들고
// for(let el of arr){
//   if(el !== minLength && el !== maxLength){
//     result = result.push(el)
//   }
// }
// return result;

// }
function removeExtremes(arr) {
  let shortestLen = 20;
  let longestLen = 0;
  let shortestIdx = 0;
  let longestIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longestLen) {
      longestLen = arr[i].length;
      longestIdx = i;
    }

    if (arr[i].length <= shortestLen) {
      shortestLen = arr[i].length;
      shortestIdx = i;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== shortestIdx && i !== longestIdx) {
      result.push(arr[i]);
    }
  }

  return result;
}
