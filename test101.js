//프로그래머스 파보나츠
function solution(n){
   let foboNum=[];
   foboNum[0] = 0;
   foboNum[1] = 1;
   foboNum[2] = 1;

    for(let  i=3; i<=n; i++){
        foboNum[i] = (foboNum[i-1]%1234567) + (foboNum[i-2]%1234567)
    }
    return foboNum[n]%1234567;
    
}

console.log(

    solution(5)
)