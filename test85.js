function solution(arr){
    let tmp = Array.from({length:arr.length},()=>0);
    let ch = Array.from({length:arr.length},()=>0);
    let n = arr.length;
    let answer=  0;
    
    function DFS(v){
       
        if(v===n){
            let sum =tmp.reduce((result,current)=>{
                return result+""+current;
            },"")
            answer= Math.max(answer,sum);
        }else{
            for(let i = 0; i<n; i++){
                if(ch[i] ==0){
                    ch[i]=1;
                    tmp[v]=arr[i];
                    DFS(v+1);
                    ch[i]=0;
                }
            }
        }
    }
    DFS(0);
    return ""+answer;
}

console.log(solution([6,10,2]))