function solution(n,arr){
    let graph = Array.from(Array(n+1),()=>Array());
    let ch = Array.from({length:n+1},()=>0)
    let answer=  0;
    let tmp =[];
    for(let [a,b] of arr){        
        graph[a].push(b);
        
    }
   
    
    function DFS(v){
        if(v===n){
            console.log(tmp);
            answer++;
        }else{
            for(let i= 0; i<graph[v].length;i++ ){
                
                if(ch[graph[v][i]]==0){ // 정점 번호
                    ch[graph[v][i]]=1;
                    tmp.push(graph[v][i]);
                    DFS(graph[v][i]);
                    ch[graph[v][i]]=0;
                    tmp.pop();
                }
            }
        }

    }
    ch[1] =1;
    DFS(1);
    console.log(answer);

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
     [4 ,5 ],
   ]
 ))