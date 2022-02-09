function solution(array){
  for(let i = 0; i<array.length; i++){
    let idx = i
    for(let j=i+1; j<array.length; j++){
      if(array[idx] >array[j]){
        idx=j
      }
    }

    [array[i],array[idx]]=[array[idx],array[i]]
  }
  console.log(array);
}

console.log(solution([13 ,5 ,11, 7 ,23 ,15 ]))