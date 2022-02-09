function solution(n,arr){
    let graph =Array.from(Array(n),()=>Array(n).fill(0));
    let ch =Array.from({length:n},()=>0);
    let answer =0;
    let tmp = [];
    for(let [a,b] of arr){
        graph[a-1][b-1] =1;
    }
    console.log(graph);
    function DFS(v){        
        if(v===n-1){
            console.log(tmp);
            answer++;
        }else{
            for(let i =0; i<n; i++){
                if(ch[i] ==0 && graph[v][i] ==1){
                    ch[i] =1;
                    tmp.push(i+1);
                    DFS(i);
                    ch[i] =0;
                    tmp.pop()
                }
                
            }
        }
    }
    ch[0]=1;
    DFS(0);

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
    [4 ,5 ],
  ]
))