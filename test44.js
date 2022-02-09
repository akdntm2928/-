function solution(cnt,array){
  let result = [];
  for(let i = 0; i<array.length; i++){
    result.unshift(array[i]);
    if(result.includes(array[i])){
      result.splice(i,1);
    }
    if(result.length ==cnt+1){
      result.pop();
    }
  }
  console.log(result)
}

console.log(solution(5,[1, 2, 3, 2, 6, 2, 3 ,5,7]))