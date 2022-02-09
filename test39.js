function decimal(Number){
  let flag = true;
  if(Number ==1 || Number ==0){
    flag= false;
  }
  for(let  i = 2; i<Number; i++){
    if(Number%i ==0){
      flag = false;
    }
  }
  return flag;
}

function solution(numbers) {
  let array = numbers.split("");
  let result = [];
  
  for(let  i = 0; i<array.length; i++){
    let flag  =decimal(array[i]);
    if(true){
      result.push(Number(array[i]));
    }
    
    for(let  j = 0; j<array.length; j++){
      if(array[i] != array[j]){
        flag  =decimal(array[i]+array[j]);
        if(true){
          result.push(Number(array[i]+array[j]));
        }
      }
    }  
  }
  return result
}

console.log(solution("011"));