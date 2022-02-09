function solution(n,arr){
    let graph = Array.from(Array(n),()=>Array(n).fill(0));
    let ch = Array.from({length:n},()=>0)
    let tmp = [];
    let answer = 0;
    for(let [a,b] of arr){
        graph[a-1][b-1] =1;    
    }
    console.log(graph);
    function DFS(v,s){
        if(v===n-1){ 
            console.log(tmp)
            answer++;
        }else{
            for(let i =0; i< n; i++){
                if(ch[i] ===0 && graph[v][i] !=0 ){
                    ch[i] =1;
                    tmp.push(i+1);
                    DFS(i);
                    ch[i] =0;
                    tmp.pop();
                }
            }
        }
    }

    DFS(0,0);
 
    return answer;
}

console.log(solution(
    5,[
    [1 ,2],
    [1 ,3],
    [1 ,4],
    [2 ,1],
    [2 ,3],
    [2 ,5],
    [3 ,4],
    [4 ,2],
    [4 ,5]
    ],
))