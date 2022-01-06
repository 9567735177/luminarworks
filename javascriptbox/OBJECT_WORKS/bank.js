var accounts = {
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

function validateAccountNumber(acno){
    return acno in accounts?true:false
}
// validateAccountNumber(1000);

function getBalannce(acno){

    if(validateAccountNumber(acno)){
        return accounts[acno].balance

    }
    else{
        return "naN"
    }

   

}
//getBalannce(1001)

function authenticateUser(acno,password){
    if(validateAccountNumber(acno)){
        let pwd=accounts[acno].password
        if(pwd==password){
            console.log("authentication success");
        }
        else{
            console.log("invalid password");
        }

    }
    else{
        console.log("invalid account number");
    }
}



function fundTransfer(from_acno,to_acno,amount){
    if(validateAccountNumber(to_acno)){
        let curBalFrom=getBalannce(from_acno) //20000
        if(amount>curBalFrom){
            console.log("insufficient balance");
        }
        else{
            accounts[to_acno].balance+=amount
            accounts[from_acno].balance-=amount
            let creditTransaction={from:from_acno,amount:amount}
            let debitTransaction={to_acno:to_acno,amount:amount}
            accounts[from_acno].transactions.debitTransactions.push(debitTransaction)
            accounts[to_acno].transactions.creditTransactions.push(creditTransaction)
            console.log("debit transaction of payer details",accounts[from_acno].transactions.debitTransactions);
            console.log("credit transaction of receiver details",accounts[to_acno].transactions.creditTransactions);

        }

    }
    else{
        console.log("invalid to account number");
    }
}
 fundTransfer(1001,1000,500);