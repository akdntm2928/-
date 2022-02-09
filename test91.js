function solution(n,k){
    let dy =Array.from(Array(n+1),()=>Array(n+1).fill(0));
    let b = Array.from({length:n},()=>0);
    let ch = Array.from({length:n},()=>0);
    let tmp = [];
    function combi(n,r){        
        if(dy[n][r] !=0 ) return dy[n][r]
        if(n===r || r===0) return 1
        else return dy[n][r] = combi(n-1,r-1) +combi(n-1,r);
    }

    for(let i =0; i<n; i++){
       b[i]=combi(n-1,i);
    }

    
    let answer
    let flag =false;
    function DFS(v,sum){
        if(flag) return ;
        if(v===n && sum ==k){
         
            answer = [...tmp];
            flag =true;
        }else{
            for(let i = 0; i<n; i++){
                if(ch[i] ==0){
                    ch[i]=1;
                    tmp.push(i+1);
                    DFS(v+1,sum+(b[v]*tmp[v]));
                    ch[i]=0;
                    tmp.pop();
                }
            }            
        }

    }
  
   DFS(0,0);  
   return answer;
}

console.log(solution(
    4,16
))