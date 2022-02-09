function solution(n){

    let ch = Array.from({length:n+1},()=>0)
    let answer =[];
    function DEF(v){
        if(v===n+1){
            let tmp = "";
            for(let i=1; i<v; i++){
                if(ch[i] ===1){
                    tmp +=i; 
                }
            }
            answer.push(tmp);
        }else{
            ch[v] =1;
            DEF(v+1);
            ch[v] =0;
            DEF(v+1);
        }
    }

    DEF(1);
    console.log(answer);
}

console.log(solution(3))