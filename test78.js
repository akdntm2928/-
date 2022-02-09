function solution(n){
    let mul = 1;
    for(let  i = n; 0<i; i--){
        mul = mul*i;
    }
    return mul
}

console.log(solution(5))