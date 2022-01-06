var array=[9,6,7,8,3,2]
var op=[]
for(let num of array){

    //num>5?op.push((num+1)):op.push((num-1))
    if(num<5){
         op.push((num-1))
    }
    else{
         op.push((num+1))
    }
}
console.log(op);

//
