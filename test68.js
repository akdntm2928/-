function solution(array){
    let ch = Array.from({length:array.length},()=>0);
    let result =[];
    let answer = 'NO';
    function DEF(v){
        if(v===array.length){
            let tmp =0;
            for(let i=0; i<v; i++){
                if(ch[i]===1){
                    tmp +=array[i];
                }
            }
   
            if(result.indexOf(tmp) !=-1){
                answer ='YES';
                return answer;
            }else{
                result.push(tmp);
            }

        }else{
            ch[v]=1;
            DEF(v+1);
            ch[v]=0;
            DEF(v+1);
        }
    }

    DEF(0)

    return answer;
}

console.log(solution([1 ,3 ,5 ,6 ,7 ,10]));