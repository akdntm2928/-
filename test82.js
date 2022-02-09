function solution(array,target){
    let tmpArr =array.sort((a,b)=>a-b);
    let answer = 0;
    target = array[target];
    for(let i =0; i<tmpArr.length; i++){
        if(target ==tmpArr[i]){
            answer[i];
        }
    }
    return answer;
}

console.log(solution([2,1,3,2],2))