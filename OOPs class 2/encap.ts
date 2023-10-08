// ENCAPSULATION
//1 public=everyone can use 
//2 protected=only childs can use parents properties
//3 privete=no one can use
class bank{
//    private balance:number=0
//    protected balance:number=0
   public balance:number=0
   private getBalance(){
return this.balance
   }
}
class account extends bank{
    public transactions:number[]=[]
    public showbalance(){
        return this.balance
    }
}
var account1 =new account()
console.log("koko",account1.balance);
console.log("koko",account1.showbalance());




