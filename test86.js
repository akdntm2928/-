function solution(k,arr){
    let n =arr.length;
    let tmp  =Array.from({length:n},()=>0);
    let ch  =Array.from({length:n},()=>0);
    let answer= 0;
    function EFS(v){
        if(v===n){
            let total = k
            let cnt = 0;
            console.log(tmp);
            for(let i  = 0; i<v; i++){
                if(total>=tmp[i][0]){
                    total -=tmp[i][1];
                    cnt++;
                }
            }
            answer = Math.max(answer,cnt)
        }else{
            for(let i= 0; i<n; i++){
                if(ch[i]==0){
                    ch[i] = 1;
                    tmp[v] = arr[i];
                    EFS(v+1);
                    ch[i]=0;
                }
            }
        }
    }
    EFS(0)
    return answer;
}

console.log(solution(
    80,[[80,20],[50,40],[30,10]]
))