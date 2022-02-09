// function solution(array){
//   let answer = 0
//   for(let i = 0; i<array.length; i++){
//     let tmp =array[i][1];
//     let cnt = 1;
//     for(let j=0; j<array.length; j++){
//       if(tmp<=array[j][0] && i != j){
//         tmp=array[j][1];
//         cnt++
//       }
//     }
 
//     answer = Math.max(answer,cnt);
//   }
//   return answer;
// }


function solution(array){
  array.sort((a,b)=>{
    if(a[1]==b[1]) return a[0] =b[0]
    else return a[1]-b[1];
  })
  let answer  = 0;
  let tmp  =0;
  for(let i = 0; i<array.length; i++){
    if(tmp <= array[i][0]){
      tmp=array[i][1];
      answer++;
    }
  }
  return answer;
}
console.log(solution([[1,4], [2,3], [3,5], [4,6], [5,7]]

))