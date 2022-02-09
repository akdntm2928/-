function solution(array){
  let temp = [...array];
  temp.sort((a,b)=>a-b);
  let answer =[];
  temp.forEach((ele,index)=>{
    if(ele != array[index]){
      answer.push(index+1);
    }
  })

  return answer;
}
console.log(solution([120 ,125 ,152 ,130 ,135 ,135 ,143 ,127 ,160]))
console.log(solution([120, 130 ,150 ,150 ,130 ,150]));