class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }

session={

}
validateAccountNumber(acno){
    return acno in this.accounts ?true:false
}
authenticate(acno,password){
    if(this.validateAccountNumber(acno)){
        let pwd=this.accounts[acno].password
        if(password==pwd){
            console.log("access granteed");
            this.session["user"]=acno

        }
        else{
            console.log("invalid password");
        }
        
    }
    else{
        console.log("invalid account number");
    }
}
getbalance(acno){
    return this.accounts[acno].balance
    
}
balanceEnquiry(){
    if("user" in this.session){
        let loggeduser=this.session["user"]
        console.log(this.getbalance(loggeduser));
    }
    else{
        console.log("invalid session u must login");
    }
}
loginRequired(){
    return "user" in this.session ?true:false
}
loggeduser(){
    if(this.loginRequired()){
       return this.session["user"]
    }
}
fundtransfer(to_acno,amount){
    if (this.loginRequired()){
        let loggeduser=this.session["user"]
        if(this.validateAccountNumber(to_acno)){
            let curntbalance=this.getbalance(loggeduser)
            if(amount>curntbalance){
                console.log("insufficient amount");

            }
            else{
                this.accounts[to_acno].balance=curntbalance+amount
                let to_acno_balance=this.getbalance(to_acno)
                this.accounts[loggeduser].balance=curntbalance-amount
                let loggeduser_from=this.getbalance(loggeduser)
                let creditTrans={from_acno:loggeduser,amount:amount}
                let debitTrans={to_acno:to_acno,amount:amount}
                this.accounts[loggeduser].transactions.debitTransactions.push(debitTrans)
                this.accounts[to_acno].transactions.creditTransactions.push(creditTrans)
                console.log(`your acno ${loggeduser} has been  debited with ${amount},avl balance is ${loggeduser_from}`);
                console.log(`your acno ${to_acno} has been credited with ${amount},avl balance is ${to_acno_balance}`);
                // console.log("debit transaction of payer details",this.accounts[loggeduser].transactions[1].debitTransactions);
                // console.log("credit transaction of prayer details",this.accounts[to_acno].transactions[0].creditTransactions);

               
            }

        }
        else{

            console.log("invalid to account number");
        }

    }
    else{
console.log("invalid account number");
    }
}
getDebitTransaction(){
    let user=this.loggeduser()
    this.accounts[user].transactions.debitTransactions.forEach(t=>console.log(t))
        
    
}
getCreditTransaction(){
    let user=this.loggeduser()
    this.accounts[user].transactions.creditTransactions.forEach(t=>console.log(t))

}
getTransactionHistory(){
    let user=this.loggeduser()
    console.log(this.accounts[user].transactions);
}
}

var bank=new Bank                                      //validate account number
//console.log(bank.validateAccountNumber(1001));
bank.authenticate(1000,"userone")                      //authenticate (acno,password)

bank.balanceEnquiry(); 
                                
bank.fundtransfer(1001,500)

bank.getTransactionHistory(1001)