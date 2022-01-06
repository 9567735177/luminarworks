var num=123;
var sum=0;
while(num!=0){
    let digit=num%10;
    sum+=digit**3;
    
    num=Math.floor(num/10);
    
}
console.log(sum);