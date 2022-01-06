
var pattern="BABABBC"
var wc={}
var op=[]   //only for array method
Array.from(pattern).map(char=>char in wc?op.push(char):wc[char]=1)   //using Array.from(pattern)
//pattern.split("").map(char=>char in wc?op.push(char):wc[char]=1)
console.log(op[0]);             //oneline method

for(let char of pattern){
    if(char in wc){
       // console.log( "first recursive character is ",char);
break

    }
    else{
        wc[char]=1
    }
    }
        