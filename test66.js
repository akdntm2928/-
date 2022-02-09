function DES(v){
    if(v>7){
        return 
    }else{
  
        DES(v*2);
        DES(v*2+1);
        console.log(v);
    }
    
}

function solution(v){
    DES(v);
}

console.log(solution(1));