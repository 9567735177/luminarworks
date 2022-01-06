 var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
var higest_case=coivd_data.reduce((cd1,cd2)=>cd1[2]>cd2[2]?cd1:cd2)
// console.log(higest_case);

// q2 district with higest 1 dose vaccination rate
var district=coivd_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[5]
console.log(district);
var greeDistrict=coivd_data.filter((d1=>d1[5]==district))
    //console.log(greeDistrict);

// q3 district with lowest death cases
var districtd=coivd_data.reduce((dr1,dr2)=>(dr1[3]<dr2[3]?dr1:dr2))[1]
//console.log(districtd);

// q4 sort district with +ve cases
 var positive_case=coivd_data.sort((p1,p2)=>p1[2]-p2[2])
//console.log(positive_case);

// q5 sort the districts based on 1st dose
var first_dose=coivd_data.sort((d1,d2)=>(d1[5]-d2[5]))
//console.log(first_dose);

// q6 is there any states with +ve cases > 60000
var pos_case=coivd_data.some(cases=>(cases[2]>60000))
//console.log(pos_case);

// q7 print trissur details
 var trsr_det=coivd_data.find(details=>(details[1]=="thrissur"))
//console.log(trsr_det);

// q8 total nu,ber of +ve cases
 var total_pos=coivd_data.map(p=>p[2]) .reduce((pc1,pc2)=>(pc1+pc2))
console.log(total_pos);                            

// q9 total number of cured cases
var total_cured=coivd_data.map(d=>d[4]) .reduce((cc1,cc2)=>cc1+cc2)
console.log(total_cured);

// q10 cured numbers of iduky
var iduki=coivd_data.filter(dis=>dis[1]=="iduky") .map(dis=>dis[4])
//console.log(iduki);
var iduki=covid_data.find(d=>d[1]=="iduky")[4]
console.log(iduki);

// q11 total number of death cases
var total_death=coivd_data.map(d=>d[3]) .reduce((dc1,dc2)=>dc1+dc2)
console.log(total_death);