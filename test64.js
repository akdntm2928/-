function solution(target,array){
 array.sort((a,b)=>a-b);
 let left = 1;
 let right = array[array.length-1];
 let answer
 while(left<=right){
     let mid = Math.floor((left+right)/2);
     let cnt = 1;
     let start = array[0];
     let result =[]
     for(let  i=1; i<array.length; i++ ){
         let between =array[i]- start; 
         if(mid<=between){
             cnt++;
             result.push(between)
             start = array[i];
         }
     }
    
     if(target === cnt){
        answer = Math.min(...result);
        break
     }else if(target<cnt){
        left = mid +1;
     }else{
        right = mid -1;
     }
 }
 return answer;
}

console.log(solution(3,[1, 2, 8, 4, 9]))