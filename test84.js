function solution(num){
    let arr= num.split("");
    let leng = num.length;
    let tmp = Array.from({length:leng},()=>0);
    let ch = Array.from({length:leng},()=>0);

    function DFS(v){
        if(v===leng){   
            let sum =tmp.reduce((result,current)=>{
                return result+current
            },"")
            arr.push(sum);
        }else{
            for(let i = 0; i<leng;i++){
                if(ch[i]===0){
                    ch[i]=1;
                    tmp[v]= arr[i];
                    DFS(v+1);
                    ch[i]=0;
                }
            }
        }   

    }
    DFS(0);
    let result = [];
    ch = Array.from({length:leng},()=>0);
 
    function DFS2(v){
        if(v==leng){
            let sum="";
            console.log(sum);
            for(let i=0; i<v;i++){
                if(ch[i]==1){
                    sum += arr[i];   
                }
            }
            arr.push(sum);
        }else{
            ch[v] = 1
            DFS2(v+1);
            ch[v] = 0
            DFS2(v+1);
        }

    }
    DFS2(0);
    arr= arr.map((val)=>Number(val));
    arr = new Set(arr);
    arr = Array.from(arr);
    console.log(arr);
    arr = arr.reduce((result,current)=>{
        if(current != '0' && current!='1'){
            result.push(current);            
        }
        return result;
    },[])  

    
    let cnt= 0;
    // console.log(arr);
    for(let i = 0; i<arr.length; i++){
        for(let j =2; j<arr[i]; j++ ){
            if(arr[i]%j ==0){
                // console.log(arr[i],j);
                cnt++;
                break;
            }
        }
    }
    return arr.length -cnt;
}
console.log(solution("7843"))