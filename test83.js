function solution(array){
    let n = array.length;   
    let tmp  =Array.from({length:array.length},()=>0);
    let ch  =Array.from({length:array.length},()=>0);
    let answer = 0
    function DFS(v){
        if(v===n){ 
            let sum = tmp.reduce((result,current)=>{
                return result+current
            },'')
            answer = Math.max(Number(sum),answer);
        
        }else{
            for(let i = 0; i<n; i++){
                if(ch[i]==0){
                    ch[i]=1
                    tmp[v] =""+array[i]
                    DFS(v+1);
                    ch[i]=0
                }else{
                    
                }
            }
        }
    }
    DFS(0)
    return ""+answer
}

console.log(solution(
    [3, 30, 34, 5, 9, 4, 40, 42]
))