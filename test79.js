function solution(n,m){
    let tmp = Array.from({length:m},()=>0);
    let answer =[];
    let tmpSum = []
    function DFS(v,s){
        if(v===m){
            answer.push([...tmp]);            
        }else{
            for(let i= s; i<n+1; i++){
                tmp[v] = i;
                DFS(v+1,i+1);
            }
        }
    }


    DFS(0,1);
    console.log(tmpSum);
    return answer;

}

console.log(solution(4,2));