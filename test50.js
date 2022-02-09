function solution(array,target){
  let answer = array;
  answer.sort((a,b)=>a-b);
  let left = 0;
  let right =array.length-1;
  let cnt = 0;

  while(left<=right){
    cnt++;
    let mid = Math.floor((left+right)/2);
    if(target == answer[mid] ){
      break;
    }else if(target<answer[mid]){
      right = mid-1;
    }else{
      left = mid +1;
    }
  }
  return cnt;
}
console.log(solution(
  [23, 87, 65, 12, 57, 32, 99, 81],32
));
