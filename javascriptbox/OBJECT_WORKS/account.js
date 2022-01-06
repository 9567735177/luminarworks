var accounts = [
  {
    acno: 1000, ac_type: "savings", balance: 5000, transactions: [
      { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
      { to: 1002, amount: 600, note: "geto", method: "neft" },
      { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
    ]
  },
  {
    acno: 1001, ac_type: "savings", balance: 6000, transactions: [
      { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
      { to: 1002, amount: 500, note: "geto", method: "neft" },
      { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

    ]
  },
  {
    acno: 1002, ac_type: "current", balance: 8000, transactions: [
      { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
      { to: 1001, amount: 5000, note: "geto", method: "neft" },
      { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

    ]
  },
  {
    acno: 1003, ac_type: "current", balance: 16000, transactions: [
      { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
      { to: 1002, amount: 500, note: "geto", method: "neft" },
      { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }

    ]
  },

]
// q1 how many account details in this dataset
//console.log(accounts.length);

// q2 print all account numbers whose ac type savings
//accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno) )

//q3print balance of acno=1000
let bal = accounts.find(data => data.acno == 1000).balance
//console.log(bal);
//accounts.filter(data=>data.acno==1000).forEach(data=>console.log(data.balance))

//q4 print all g-pay transaction details
let gpay = accounts.map(data => data.transactions).flat().filter(trans => trans.method == "g-pay")
//console.log(gpay);

 //q5 print credited transaction of 1002
 let credit=accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002)
 //console.log(credit);
//by foreach
// accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002).forEach(t=>console.log(t))

//q6 print highest balance account details
 var high =accounts.sort((a1,a2)=>a2.balance-a1.balance)[0]
 console.log(high);
  //q7 print transaction history of 1002(debit&credit transaction)
//debit details

var debittrans=accounts.find(data=>data.acno==1002).transactions
//credit details
var credittrans=accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002)
var transactionhistory={"debittransaction":debittrans,"credittransaction":credittrans}
console.log(transactionhistory)
