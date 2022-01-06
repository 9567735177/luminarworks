var arr=[2,5,6,8,9,10]
arr.sort((n1,n2)=>n1-n2)
var element=6;
var flag=0;
var low=0; 
var upp=arr.length-1;
while(low<=upp){//0<=5
    let mid=Math.floor((low+upp)/2)//0+5/2=2
    //case1
    if(element==arr[mid]){//5==6
        flag=1;
        break
    }
    //case2
    else if(element>arr[mid]){//6>5
        low=mid+1;
    }
    //case3
    else if(element<arr[mid]){
        upp=mid-1;
    }
}
console.log(flag=0?"not found":"found");