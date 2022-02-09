function solution(target,array){
    let left =1
    let right =array.reduce((result,current)=>result+current)
    let answer
    while(left<=right){
        let cnt = 0;
        let mid = Math.floor((left+right)/2);
        let sum = 0;
        let result = [];
        for(let i =0; i<array.length; i++){
            sum+=array[i];
           
            if(sum>=mid ){
                cnt++;
                result.push(sum)
                sum=array[i]; 
            }
        }
        if(cnt===target){  

            console.log(Math.min(...result));
            break;
        }else if(cnt<target){
            right = mid - 1;
        }else{
            left =mid + 1;
        }
    }

    return answer
}

console.log(solution(
    3, [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9,10,11]
))