function compressString(str) {
    // 1. 문자열을 입력받는다.
    // 2. 문자열에서 반복되는 문자 3개 이상 있는 경우 (반복되는 수  + 문자)로 표현한다.
    // str이 빈 문자열이면 빈문자열 리턴
    // str 돌면서 현재 str[idx]와 str[ind+1]문자 비교
    // 같으면 count 다르면 count >=3 을 확인
    // true이면 newStr = count + str[idx]
    // false이면 newStr += count 수만큼 str[idx]를 더해준다.
    // 3. newStr 리턴 
    // TODO: 여기에 코드를 작성합니다.
  let count = 1
  let newStr = ''
  for(let i = 0; i<str.length;i++){
    if(str[i] === str[i+1]){
      count++
    } else if(count >= 3 && str[i]!== str[i+1]){
      newStr += count + str[i]
      count = 1;
    } else{
      for(let j = 1; j<=count; j++){
        newStr += str[i]
      }
      count=1
    }
  }
  return newStr
  }
  