// 문자열 압축
// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 
// 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
// 오. 단 반복횟수가 1인 경우 생략합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 압축된 문자열을 출력한다.
// ▣ 입력예제 1 
// KKHSSSSSSSE
// ▣ 출력예제 1
// K2HS7E

function solution(s){
  let temp= '';
  for(let i=0; i<s.length; i++){
    if(temp.indexOf(s[i]) == -1){
      temp +=s[i];
    }
  }

  let result = '';

  for(let i=0; i<temp.length; i++){
    let target =temp[i];
    let cnt =0;
    for(let j=0; j<s.length; j++){
      if(target == s[j]){
        cnt++;
      }
    }
    if(cnt != 1){
      result +=`${target}${cnt}`
    }else{
      result +=`${target}`
    }
  }
  return result;
}

console.log(solution('KKHSSSSSSSE'));