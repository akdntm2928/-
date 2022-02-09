function solution(n,k){
    let tmp =Array.from({length:k},()=>0);
    let answer = [];
    function DFS(v,s){
        if(v===k){
            answer.push(tmp);
        }else{
            for(let  i =s; i<=n; i++){
                tmp[v]= i
                DFS(v+1,i+1)
            }
        }

    }
    DFS(0,1)
    return answer.length;
    
}

console.log(solution(
    33,19
))