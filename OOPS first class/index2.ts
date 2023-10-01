//                              OVERLOADING

function SUM(n1:string,n2:string):string 
function SUM(n1:number,n2:number):number 
function SUM(n1:boolean,n2:boolean):boolean 
function SUM(n1:boolean,n2:number,n3:string,n4:boolean):string 
function SUM(n1:any,n2:any,n3?:any,n4?:any):any{
    if (n1&&n2&&n3&&n4) {
        return n1+n2+n3+n4
    }else if (n1&&n2&&n3) {
        return n1+n2+n3
    }else {
        return n1+n2
    }
}
console.log(add(false,9,"45",true));
console.log(add(true,true));
console.log(add(45,32));
console.log(add("45","32"));

    
//                               OVERIDDING











































