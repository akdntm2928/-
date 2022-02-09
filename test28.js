







function solution(array,move){
  let result = [];
  let count = 0
  for(let z= 0; z<move.length; z++){

    let bool =true
    let cnt = 0;
    // move 열 값을 array 행 값을 조회
    while(bool){ 
      if(cnt ==array.length){
        bool =false;
        continue;
      }
      if(array[cnt][move[z]-1] != 0){
        bool=false;
        result.push(array[cnt][move[z]-1]);
        array[cnt][move[z]-1] =0;
      
      }
      cnt++
    }
   // 앞열과 같은것은 팝으로 제거
    if(result[result.length-1]==result[result.length-2]){
      result.pop();
      result.pop();
      count +=2;
    }
  }
  return count

}

console.log(solution(
  [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
  ],
  [1,5,3,5,1,2,1,4]
))