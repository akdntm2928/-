function solution(array){
  array.sort((a,b)=>{
    if(a[1] === b[1]) return a[0]- b[0]
    else return a[1]-b[1];
  })

  let tmp = 0;
  let cnt = 0 ;
  for(ele of array){
    if(tmp <= ele[0]){
      cnt ++;
      tmp = ele[1];
    }
  }
  return cnt;
}

console.log(solution(
  [
  [1 ,4],
  [2 ,3],
  [3 ,5],
  [4 ,6],
  [5 ,7],
]))

console.log(solution(
  [
    [3, 3],
    [1, 3],
    [2, 3],
    
]))