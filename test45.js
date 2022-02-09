function solution(array,target){
  array.sort((a,b)=>a-b);
  let left = 0;
  let right =array.length
  let cnt = 0;
  while(left<right){
    let mid =Math.floor(left+right/2);
    cnt ++;
    if(target==array[mid]){  
    }else if(array[mid]>target){
      right = mid-1;
    }else{
      left =mid +1;
    }
  }
  console.log(cnt);

}


console.log(solution([23, 87 ,65 ,12 ,57 ,32 ,99 ,81] ,32))