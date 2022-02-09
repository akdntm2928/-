function solution(n,arr){
    let graph = Array.from(Array(n+1),()=>Array(n+1).fill(0));
    let ch = Array.from({length:n+1},()=>0)
    let tmp = [];
    let answer = 0;
    for(let [a,b] of arr){
        graph[a][b] =1;    
    }

    function DFS(v){
        if(v===n){ answer++;
        }else{
            for(let i =1; i<=n; i++){
                if(ch[i] ===0 && graph[v][i]==1 ){
                    ch[i] =1;
                    tmp.push(i);
                    DFS(v+1);
                    ch[i] =0;
                    tmp.pop();
                }
            }
        }
    }

    DFS(1);
 
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