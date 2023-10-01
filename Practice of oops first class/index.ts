                            //  OVERLOADING

// function SUM(n1:string,n2:string):string 
// function SUM(n1:number,n2:number):number 
// function SUM(n1:boolean,n2:boolean):boolean 
// function SUM(n1:boolean,n2:number,n3:string,n4:boolean):string 
// function SUM(n1:any,n2:any,n3?:any,n4?:any):any{
//     if (n1&&n2&&n3&&n4) {
//         return n1+n2+n3+n4
//     }else if (n1&&n2&&n3) {
//         return n1+n2+n3
//     }else {
//         return n1+n2
//     }
// }
// console.log(SUM(false,9,"45",true));
// console.log(SUM(true,true));
// console.log(SUM(45,32));
// console.log(SUM("45","32"));

    
                            //   OVERIDDING

// function jk(array:number[]) {
//     for (let index = 0; index < 10; index++) {
//         array.splice(0,4,4,5,6,6,7,8)
//         console.log(array);
        
//     }
// }
// console.log(jk([1,2,3]));


// function suman(...name:string[]) {
//     for (let index = 0; index < 1; index++) {
//         name.splice(1,0,"danish","ahmad")
//         console.log(name);
        
//     }
// }
// console.log(suman("jajja","hamid","how"));


// class entity {
//     color:string
//     model:number
//     company:string
//     constructor(color:string,model:number,company:string){
//         this.color=color
//         this.model=model
//         this.company=company
//     }
// }
// let entity2=new entity("black",202_3,"honda")
// let entity3=new entity("brown",202_3,"corolla")
// let entity4=new entity("white",202_3,"prado")
// console.log("entity2 is",entity2);
// console.log("entity3 is",entity3);
// console.log("entity4 is",entity4);





class Car {
  company: string = "";
  modelYear: number = 0;
  color: string = "";

  constructor(_company: string, _modelYear: number, _color: string) {
    this.company = _company;
    this.modelYear = _modelYear;
    this.color = _color;
  }
  start() {
    console.log("engine starting");
  }
}

const car1 = new Car("Honda", 2023, "White");
car1.start();
car1.start();
car1.start();
car1.start();
console.log("🚀 ~ file: index.ts:21 ~ car1:", car1);
const car2 = new Car("BMW", 2023, "BLACK");
console.log("🚀 ~ file: index.ts:23 ~ car2:", car2);
const car3 = new Car("Audi", 2023, "Grey");
console.log("🚀 ~ file: index.ts:25 ~ car3:", car3);



































