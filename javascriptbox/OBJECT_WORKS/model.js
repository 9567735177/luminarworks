var baleno={
    name="baleno",
    colour=["red","white","blue"],
    varient=["petrol"],
    price="8lacks",
    manufacture="nexa",
    getprice(){
        return this.price
    }
}
var glanza={
    price="9lacks",
    manufacture="toyota"
}
glanza.__proto__=baleno
console.log(glanza.getprice());