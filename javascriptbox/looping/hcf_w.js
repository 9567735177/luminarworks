var num1=525;
var num2=3000;
while(num1!=num2){
    if(num1>num2){
        num1-=num2;
    }
    else{
        num2-=num1;
    }
}
console.log(num1);