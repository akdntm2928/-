function solution(array){
  let tempArr = [];
  for(let  i = 0 ; i<array.length; i++){
    // console.log(array[i][0]);
    tempArr.push([array[i][0],"s"]);
    tempArr.push([array[i][1],"e"]);
  }
  tempArr.sort((a,b)=>{
    if(a[0] === b[0]) return a[1].charCodeAt()  -b[1].charCodeAt();
    else return a[0]-b[0]
  })

  let answer = 0;
  let cnt=0;
  for(let i =0; i<tempArr.length; i++){

    if(tempArr[i][1]==='s') cnt++;
    else if(tempArr[i][1]==='e') cnt--;
    answer = Math.max(answer,cnt);
  }

  return answer;
}

console.log(
  solution(
  [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14]
  ]
  )
)