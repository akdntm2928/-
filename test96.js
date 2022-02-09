function solution(board){
    let answer =0;
    let dx = [-1,0,1,0]
    let dy = [0,1,0,-1];
    let tmp= [];
    function DFS(x,y){
        if(x===6 && y===6){
            answer ++;
            console.log(tmp);
        }else{
            for(let k = 0; k<4; k++){
                let nx = x+dx[k];
                let ny = y+dy[k];
                if(nx>=0 && ny>=0 && nx<=6 && ny<=6 && board[nx][ny]===0){
                    board[nx][ny] =1;    
                    tmp.push('1');
                    DFS(nx,ny);
                    board[nx][ny]=0;
                    tmp.pop();
                }
            }
        }
    }
    board[0][0] =1;
    DFS(0,0)
    return answer;

}
console.log(solution(
    [
    [0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0 ,1 ,1 ,1 ,1 ,1 ,0],
    [0 ,0 ,0 ,1 ,0 ,0 ,0],
    [1 ,1 ,0 ,1 ,0 ,1 ,1],
    [1 ,1 ,0 ,0 ,0 ,0 ,1],
    [1 ,1 ,0 ,1 ,1 ,0 ,0],
    [1 ,0 ,0 ,0 ,0 ,0 ,0],
    ]
    )
)