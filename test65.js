function result(cnt){

    if(cnt ==0) return 
    result(cnt-1);
    console.log(cnt);

}

function solution(cnt){
    let answer = result(cnt);
}

console.log(solution(3))