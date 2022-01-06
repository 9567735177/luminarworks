var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},
    {district:"ekm",temparature:28},
    {district:"ekm",temparature:32},


]
var weather_data={}    //(pkd;30,tvm;31)
for(let data of dataset){
    //data={district:"palakad",temprature:31}
    let distName=data.district  //extract district details from database
    let curTemp=data.temparature  //extract temperature details
    if(distName in weather_data){

        let oldTemp=weather_data[distName]
        if(curTemp>oldTemp){
weather_data[distName]=curTemp
        }
    }
    else{
        weather_data[distName]=curTemp
    }
}
console.log(weather_data);