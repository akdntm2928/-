function solution(array,target){
  let answer = [];
  
  for(let i = 0; i<array.length; i++){
    if(answer.indexOf(array[i]) !=-1){
      let index = answer.indexOf(array[i]);
      answer.splice(index,1);
    }
    if(answer.length == target){
      answer.pop();
    }
    answer.unshift(array[i]);
  }
  return answer;
}

console.log(solution([1, 2 ,3 ,2 ,6 ,2 ,3 ,5 ,7],5));