// 큐문제
// 뒤에서 값을 추가하고 앞값을 뺴준다

function solution(cnt,target){
  let temp =[];
  for(let i=1; i<=cnt; i++){
    temp.push(i);
  }
// 나머지 빼기 3
  var cnt = 0

  while(temp.length != 1){
    if(cnt == target-1){
      temp.shift()
      cnt = 0;
    }
    temp.push(temp[0]);
    temp.shift()
    cnt++;
    console.log(temp);
  }

  return temp;

}

console.log(solution(8,3));