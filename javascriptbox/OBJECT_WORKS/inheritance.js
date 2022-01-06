class parent {
    bike(){
        console.log("passsion pro");
    }
}
class child extends parent{
bike(){
    super.bike()//super refer parent
    console.log("royal enfield");
}
}
var ch=new child()
ch.bike()
//this()
//super
//constructor()