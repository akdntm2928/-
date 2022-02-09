function solution(array){
    array = array.split("");

    let ch = Array.from({length:array.length},()=>0);
    let n =array.length;
    let answer =[]

    function DFS(v){
        if(v===n){
            let sum ="";
            for(let i = 0; i<n;i++){
                if(ch[i] ==1){
                    sum+=array[i]
                }
            }
            answer.push(sum)
        }else{
          ch[v] =1
          DFS(v+1);
          ch[v] =0
          DFS(v+1);
        } 

    }
    DFS(0)
    console.log(answer);

}

console.log(solution("71"))