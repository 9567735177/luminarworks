var arr=[2,4,5,7,9,4,6]
//sum of arr
var sum=arr.reduce((n1,n2)=>(n1+n2))
console.log(sum);
//max of arr
var max=arr.reduce((n1,n2)=>(n1>n2?n1:n2))
console.log(max);
//min of arr
var min=arr.reduce((n1,n2)=>(n1<n2?n1:n2))
console.log(min);