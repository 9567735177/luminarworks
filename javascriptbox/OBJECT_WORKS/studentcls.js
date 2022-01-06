class student{
    constructor(name,age,gender,qualification){
    this.name=name
    this.age=age
    this.gender=gender
    this.qualification=qualification
    }
    printstudent(){
        console.log(this.name,this.age,this.gender,this.qualification);
    }
}
    
var obj=new student("vinay",23,"male","bsc")
//obj.setstudent("vinay",23,"male","bsc")
obj.printstudent()

var obj1=new student("haritha",21,"female","diploma")
//obj1.setstudent("haritha",21,"female","diploma")
obj.printstudent()