function solution(board){
    let answer =100000000000000000000000;
    let flag =false;
    let tmp =[];
    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];
    let xleng = board.length-1
    let yleng = board[0].length-1

    function DFS(x,y){
        if(x==xleng && y==yleng){
            answer = Math.min(answer, tmp.length+1)
            flag =true;
            
        }else{
            for(let k=0; k<4; k++){
          
                let nx = x+dx[k];
                let ny = y+dy[k];
                if(nx>=0 && ny>=0 && nx<=xleng && ny<=yleng && board[nx][ny]==1){
           
                    board[nx][ny] =0;
                    tmp.push(1);
                    DFS(nx,ny);
                    board[nx][ny] =1;
                    tmp.pop();
                }
            }
        }
    }
    board[0][0]=0;
    DFS(0,0);
    return flag ? answer :-1;
}

console.log(solution(
    [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]
))