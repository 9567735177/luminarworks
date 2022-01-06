var employee={
    eid:1000,
    ename:"jin",
    salary:25000,
    design:"developer",
    exp:1
}
//console.log(employee.design);
//console.log(employee["salary"]);

//add new class to the object
//employee.experience=3
//console.log(employee);

// check exist of any class
//console.log("gender" in employee);
//
if("exp" in employee){
    employee.exp+=1
}
else{
    employee.exp=1
}
console.log(employee);