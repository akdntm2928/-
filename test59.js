function solution(array){
  let temp = [];

  for(let i = 0; i<array.length; i++){
    temp.push([array[i][0],'s']);
    temp.push([array[i][1],'e']);
  }
  temp.sort((a,b)=>{
    if(a[0]===b[0]) return a[1].charCodeAt() -b[1].charCodeAt();
    else return a[0]-b[0];
  }) 
  let answer = 0;
  let cnt =0;
  for(val of temp){
    if(val[1] =='s') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer
}

console.log(solution(
  [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5 ,14]
  ]
))