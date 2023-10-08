// ENCAPSULATION
//1 public=everyone can use 
//2 protected=only childs can use parents properties
//3 privete=no one can use
class bank {
    //    private balance:number=0
    //    protected balance:number=0
    balance = 110;
    getBalance() {
        return this.balance;
    }
}
let balan = new bank();
// console.log("parent funtion is",balan.getBalance());
class account extends bank {
    transactions = [1, 2, 3];
    showbalance() {
        return this.transactions;
    }
    trnsactions() {
        return this.trnsactions;
    }
}
var account1 = new account();
console.log("koko", account1.balance);
console.log("koko", account1.showbalance());
console.log("kokob", account1.getBalance());
export {};
// console.log("koko",bank.get());
