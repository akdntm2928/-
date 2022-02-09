function solution(array){
  for(let i = 0; i<array.length; i++){
    let tmp = array[i];
    for(let j=i-1; 0<=j; j--){
      if(array[j]> array[j+1]){
        [array[j], array[j+1]] = [tmp,array[j]];
      }
    }
  }
  return array
}

console.log(solution([11, 7, 5, 6 ,10 ,9]))