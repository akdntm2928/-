function solution(array){
  for(let i = 0; i<array.length-1; i++){
    for(let j=0; j<array.length-i-1; j++){
      if(array[j]>0 && array[j+1]<0){
        [array[j],array[j+1]] =[array[j+1],array[j]];
      }
    }
  }
  return array;
}

console.log(solution([1 ,2 ,3 ,-3 ,-2 ,5 ,6 ,-6]))