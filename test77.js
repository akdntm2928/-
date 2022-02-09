function solution(array,m){
    let tmp  = Array.from({legnth:m},()=>0)
    let answer=[]
    function DFS(v){
        if(v ===m){
            // 중복값 체크
            let set = new Set(tmp);
            if(v == set.size) {
                answer.push([...tmp]);
            }
        }else{
            for(let  i = 0; i<array.length; i++){
                tmp[v] = array[i];
                DFS(v+1)
            }
        }
    }
    DFS(0)
    return answer;
}
console.log(solution(
    [3,6,9],2
))