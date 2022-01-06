var num1=10,num2=20,num3=30
if((num1>num2)&&(num1>num3)){
    if(num2>num3){
        console.log(`second largest ${num2}`); }
    
    else{
        console.log(`second largest ${num3}`);
    }

}

 else if((num2>num3)&&(num2>num1)){
     if(num1>num3){
         console.log(`second largest ${num1}`);}
    
    else{
        console.log(`second largest ${num3}`);
    }
    }

else if((num3>num1)&&(num3>num2)){
    if(num2>num1){
        console.log(`second largest ${num2}`);}
        else{
            console.log(`second largest ${num1}`);
        }
}
else{
    console.log(`all number are equal`);
}