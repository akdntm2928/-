function solution(array){
  let answer = array;
  for(let  i =0; i<array.length-1; i++){
    for(let j = 0; j<array.length-i-1; j++ ){
      if(answer[j]>0 && answer[j+1]<0 ){
        [answer[j],answer[j+1]] =[answer[j+1], answer[j]];
      }
    }
  }
  return answer
}

console.log(solution([1 ,2 ,3 ,-3 ,-2 ,5 ,6 ,-6]))