var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5g"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4g"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5g"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4g"],
    

]
//FIND
var mobname=mobiles.find(mob=>mob[1]=="redmi")
console.log(mobname);

var mobname=mobiles.find(mob=>mob[0]==1007)
console.log(mobname);
//usimg SOME 
//can i purchase mobile at the range of 10k&25k
var IsAval=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)
//console.log(IsAval);
//can i purchase mobile at price of 10k
var IsAval=mobiles.some(mob=>mob[3]==10000)
//console.log(IsAval);

// print max price from mobiles
 var max_price=mobiles.reduce((m1,m2)=>((m1[3]>m2[3]?m1:m2)))
 //console.log(max_price);                                          //reduce//
//print min price from mobile using reduce
 var min_price=mobiles.reduceRight((m1,m2)=>(m1[3]<m2[3]?m1:m2))//reduce right --first minimum||reduce--last minimum
 //console.log(min_price);
//q1 list all 5g mobiles available under 25k
var min_price=mobiles.reduceRight((m1,m2)=>(m1[3]<m2[3]?m1:m2))[3]//reduce right --first minimum||reduce--last minimum
 //console.log(min_price);
var costly=mobiles.filter(mob=>mob[3]==min_price)
//console.log(costly);

var mob_5g=mobiles.filter(mob=>(mob[3]<25000 && mob[6]=="5g"))
//console.log(mob_5g);

//q2 list all 5g mobiles
var mob_5g=mobiles.filter(mob=>(mob[6]=="5g"))
//console.log(mob_5g);

//q3 // list all samsung mobile names whose band=4g and display type AMOLED
var mob_amoled=mobiles.filter(mob=>(mob[1]=="samsung" && mob[5]=="AMOLED" && mob[6]=="4g"))
///console.log(mob_amoled);

//print mobile details available in price range of 25k-30k
var mob_range=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000)
//console.log(mob_range);

//print all mobiles available under 25k
var mob_price=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]])
//console.log(mob_price);


//print samsung mobile details
//var mob_sam=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[2])
//console.log(mob_sam);

// var mob_names=mobiles.map(mob=>mob[2])
// console.log(mob_names);


// var mob_price=mobiles.map(mob=>mob[3])
// console.log(mob_price);
// // //is there any mobiles can i purchase below 10k
//  var flag=0;
//  for(mobile of mobiles){
     
//    if ((mobile[3])<10000){

//      //break
//      flag==1;
//      }
    
   
//  }

//    console.log( flag==0?"yes":"no");
// var falg=0;
//     mobiles.sort((m1,m2)=>m2[3]-m1[3])
//     if(mobiles<1000){
//         flag==1;
//     }
//     console.log(flag=1?"yes":"no");
  

// //print samsung A51 mobile details
// for(let mbl of mobiles){
// if(mbl[2]=="samsung A51"){
//     // console.log(mbl);
// }
//}




// //costly mobile
// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// //console.log(mobiles[0][1]);

// //"snapdragon" processor mobiles
// for(let mbl of mobiles){
//     if(mbl[4]=="snapdragon"){
//       //  console.log(mbl[1]);
//     }
// }
// //print costly mobile with processor snapdragon with 5g band
// var snap_5g=[]
// for(let mbl of mobiles){
//     if(mbl[4]=="snapdragon"&& mbl[6]=="5G"){

// snap_5g.push(mbl)
//     }
// }
// snap_5g.sort((m1,m2)=>m2[3]-m1[3])
//console.log(snap_5g[0]);
