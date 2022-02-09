// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
// 0 0 0 0 0 0 0
// 0 5 3 7 2 3 0
// 0 3 7 1 6 1 0
// 0 7 2 5 3 4 0
// 0 4 3 6 4 1 0
// 0 8 7 3 5 2 0
// 0 0 0 0 0 0 0
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
// 다. 
// ▣ 출력설명
// 봉우리의 개수를 출력하세요.
// ▣ 입력예제 1 
// 5
// 5 3 7 2 3
// 3 7 1 6 1
// 7 2 5 3 4
// 4 3 6 4 1
// 8 7 3 5 2
// ▣ 출력예제 1
// 10

function solution(array){
    
    let result = 0;
    for(let i= 0; i<array.length; i++){
        let xreulst= 0;
        let yreulst= 0;
        for(let j=0; j<array[i].length; j++){
            xreulst += array[i][j];
            yreulst += array[j][i];
        }
        result = Math.max(result,xreulst,yreulst);    
    }
    let leftreulst =0;
    let rightreulst =0;
    for(let i= 0; i<array.length; i++){
        leftreulst += array[i][i];
        rightreulst += array[array.length-1-i][array.length-1-i];
    }
    result = Math.max(result,leftreulst,rightreulst);    
    return result
}
console.log(solution([[10 ,13 ,10, 12, 15],[12 ,39 ,30 ,23,11],[11 ,25 ,50 ,53 ,15],[19 ,27 ,29 ,37 ,27],[19 ,13 ,30 ,13 ,19]]));