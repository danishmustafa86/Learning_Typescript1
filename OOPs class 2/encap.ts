// ENCAPSULATION
//1 public=everyone can use 
//2 protected=only childs can use parents properties
//3 privete=no one can use
class bank{
   private balnce:number=890
   public balance:number=50
   public blance:number=110
    getBalance(){
return this.balnce
}
}
let balan=new bank()
console.log("parent funtion is",balan.getBalance());

class account extends bank{
    public transactions:number[]=[1,2,3]
    public showbalance(){
        return this.blance
    }
    public trnsactions(){
        return this.trnsactions
    }
}
var account1 =new account()
console.log("koko",account1.balance);
console.log("koko",account1.showbalance());
console.log("kokob",account1.getBalance());
console.log("kokob",account1.transactions);
// console.log("koko",bank.get());




