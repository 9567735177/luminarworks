//var arr=[2,3,4,5];
//var sum=7;
//var flg=0;//if u want only one pair give  flg & break
//for(let i of arr){
  //  for( let j of arr ){
    //    if(i+j==sum){
      //      console.log(`pairs are(${i},${j})`);
        //    flg=1;
        //}
        //break
    //}
//}
var arr=[2,3,4,5];
var element=6;
var upp=arr.length-1
var low=0;
var count=0;
var flag=0;
while(low<upp){//0<3
    let cur_sum=arr[low]+arr[upp]//2+5=7...
    //case1
    if(element==cur_sum){
        console.log(`pair(${arr[low]},${arr[upp]})`);
        
        flag++;
        break

    }
    //case2
    else if(cur_sum<element){//7<8
      low+=1;
    }
    //case3
    else if(cur_sum>element){//
        upp-=1;
    }
    //count++;

}
if(flag==0){
    console.log(`no pair`);
}

//console.log(count);