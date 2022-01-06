var num=123;
var res="";
for(let last_digit=num%10;num=Math.floor(num/10);res+=last_digit){
    console.log(res);
}