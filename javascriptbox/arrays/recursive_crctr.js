//First recursive character
var pattern="ABACC"
var op=[]
for(let char of pattern){
    if(op.includes(char)){
        console.log(char);
        break
    }
    else{
        op.push(char)
    }
}
