function solution(board){
 let answer = 0;
 let boardx =board.length;
 let boardy =board[0].length;
 let dx = [-1,0,1,0];
 let dy = [0,1,0,-1];
 let dis = Array.from(Array(boardx),()=>Array(boardy).fill(0));
 let queue = [];

 board[0][0] = 0;
 dis[0][0] =1;
 queue.push([0,0]);

 while(queue.length){
    let prev =  queue.shift();

    for(let k=0; k<4; k++){
      
        let nx = prev[0] + dx[k];
        let ny = prev[1] + dy[k];

        if(nx>=0 && ny>=0 && nx<boardx && ny<boardy && board[nx][ny] ==1){
            board[nx][ny] = 0;
            queue.push([nx,ny]);
            dis[nx][ny] =dis[prev[0]][prev[1]]+1;
        }
        if(nx==boardx-1 && ny ==boardy-1) {
            return  answer = dis[nx][ny];
         }
    }
 }
 return -1
}

console.log(solution(
    [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
))