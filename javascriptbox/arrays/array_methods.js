var arr=[1,2,3,4,5,6,7,8]
var even=arr.filter(num=>num%2==0)
console.log(even);

var names=["akhil","arun","arjun","amal","ravi","rahul"]
var anames=names.filter(name=>(name[0]=="a" || name[0]=="A"))
console.log(anames);


var nums=[2,3,4,5,6,7]
var op=nums.map(num=>num>5?num+1:num-1)
console.log(op);




// var square=arr.map(num=>num**2)
// console.log(square);


// var add=arr.map(num=>num+2)
// console.log(add);
 
// var names=["ram","ravi","manu"]
// var upp=names.map(name=>name.toUpperCase())
// console.log(upp);