var students=[
    [1000,"akhil","mearnstack",145,"mca"],
    [1001,"anu","mearnstack",165,"bca"],
    [1002,"nikil","django",175,"bca"],
    [1003,"vjil","django",165,"mca"],
    [1004,"tim","testing",185,"bca"],
    [1005,"jhon","testing",155,"mca"],
]
// //print course of akhil
// console.log(students[0][2]);
// //mark of akhil
// console.log(students[0][3]);


//print students name

// for(let student of students){
//     console.log(student[1]);
// }




//print the details of student in mearnstack

// for (let student of students){
//     if(student[2]=="mearnstack"){
//     console.log(student);
//     }
// }

//print details of students whose marks above >160
// for(let student of students){
//     if (student[3]>160){
//         console.log(student);
//     }
// }


//print names of django batch students whose total >168

// for(let student of students){
//     if (student[2]=="django" && student[3]>168){
//         console.log(student);
//     }
// }

//print heighest total
var sum=0;
for(let student of students){
    if (student[3]>sum){
        sum=student[3]
        
        //sum=student[3]
    }

}
console.log(sum);