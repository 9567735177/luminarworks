//find common elements from two array
 var arr1=[10,11,20,21]
var arr2=[11,12,20,21]
var p1=0;
var p2=0;
var count=0;
while(p1<arr1.length&&p2<arr2.length){
    //case1
    if(arr1[p1]==arr2[p2]){
        console.log("common element",arr1[p1]);
        p1++;
        p2++;
    }
    else if(arr1[p1]<arr2[p2]){
        p1++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }
count++;

}

console.log("count",count);


























//var i=0;
// var nw=[]
// //var low=0;
// //var upp=arr1.length-1;
// //while(low<upp){
    
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
// nw.push(arr1[i])
            
            
    //         }
            
    //     }
    // }
    // console.log(nw);



    // for(i of arr1){
    //     for(j of arr2){
    //         if(i==j){
    //             console.log(i);
    //         }
    //     }
    // }




