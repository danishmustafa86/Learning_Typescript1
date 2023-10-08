"use strict";
// ENCAPSULATION
//1 public=everyone can use 
//2 protected=only childs can use parents properties
//3 privete=no one can use
class bank {
    constructor() {
        //    private balance:number=0
        //    protected balance:number=0
        this.balance = 0;
    }
    getBalance() {
        return this.balance;
    }
}
class account extends bank {
    constructor() {
        super(...arguments);
        this.transactions = [];
    }
    showbalance() {
        return this.balance;
    }
}
var account1 = new account();
console.log("koko", account1.balance);
console.log("koko", account1.showbalance());
