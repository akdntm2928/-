// 이진트리 넓이우선탐색(BFS)
// 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.
// 1
// 2 3
// 4 5 6 7
// 넓이 우선 탐색 : 1 2 3 4 5 6 7

function solution(){
    let queue = [];
    queue.push(1);
    while(queue.length){
        let quq = queue.shift();
        console.log(quq);
        if(quq ==7) return
        for(let val of [quq*2,(quq*2)+1]){
            queue.push(val);
        }
    }
}

console.log(solution());