function solution(str){
  let temp = str.split("");
  let result =[];
  for(let i = 0; i<temp.length; i++){
      if(temp[i]=="("){
        result.push(temp[i]);
      }else{
        result.pop();
      }
  }
    return result.length ==0? 'YES':"NO"

}

console.log(solution("(()(()))(()"))