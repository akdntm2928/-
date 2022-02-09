function solution(s,k){
    let dis = Array.from({length:100001},()=>0);
    let ch = Array.from({length:100001},()=>0);
    let queue = [];
    let answer=0;
    ch[s] =1;
    queue.push(s);
    dis[s] =0;
    while(queue.length){
        let x =queue.shift();
        for(let nx of [x-1,x+1,x+5]){
            if(nx ===k) return answer = dis[x]+1;
            if(nx>0 && nx<=100000 & ch[nx] ===0){
                ch[nx]=1
                queue.push(nx);
                dis[nx]=dis[x]+1;
            }
        }
    }

    return answer;

}

console.log(
    solution(8,3)
)