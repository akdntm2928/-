function solution(array){
  let temp =[...array];
  let result = [];
  temp.sort((a,b)=>a-b);
  temp.forEach((ele,index)=>{
    if(ele != array[index]){
      result.push(index+1);
    }
  })
  return result;
}

console.log(solution([20 ,125 ,152 ,130 ,135 ,135 ,143, 127 ,160]))
console.log(solution([120 ,130 ,150 ,150 ,130 ,150]))