function solution(array,target){
 
  let result = [];
  let cnt = 0;
  for(let i = 0; i<target.length; i++){
    for(let j=0; j<array.length; j++){
      if(array[j][target[i]-1] !=0){
        result.push(array[j][target[i]-1]);
        array[j][target[i]-1]=0;
        break;
      }
    }
    if(result[result.length-1] ==result[result.length-2]){
      result.pop();
      result.pop();
      cnt +=2;
    }
  }
  return cnt
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

));