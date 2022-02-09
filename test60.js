function solution(array,target){
  array.sort((a,b)=>a-b);
  let left = 0;
  let right =array.length-1;
  let cnt =0;
  console.log(array);
  while(left<=right){
    cnt++;
    let mid = Math.floor((left+right)/2);
    if(target===array[mid]){
      console.log(array[mid],mid);
      break;
    }else if(target> array[mid]){
      left = mid+1;
    }else{
      right = mid-1;
    }
    
  }
  return cnt;
}

console.log(solution(
  [23 ,87 ,65 ,12 ,57 ,32 ,99 ,81],32
))