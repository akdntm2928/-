function solution(n,road,k){
    let graph = Array.from(Array(n),()=>Array(n).fill(0));
    let ch = Array.from(Array(n),()=>0)

    for(let [a,b,c] of road){
        graph[a-1][b-1] =c;
    }

    let flag = false;
    function DFS(v,sum){

        if(v===n-1){
            console.log('dd');
        }else{
            for(let i = 0; i<n; i++){

                if(ch[i] ==0 && graph[v][i] !=0){
                    ch[i] =1;
                    DFS(i,sum+graph[v][i]);
                    ch[i] = 0;
                }

            }
        }
    }
   
    DFS(0,0);

}

console.log(solution(
    5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3
))