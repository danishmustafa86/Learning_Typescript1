// **6** - Write a program that uses a function to find the largest element in an array of numbers.


function largetnumb(arry:number[]) {
   let largest=arry[0]
   for (let i=0;i<=arry.length;i++){
      if(arry[i]>largest){
      largest=arry[i]}
   }return largest
}
console.log(largetnumb([1,2,34,64,87,24,7,97]));

