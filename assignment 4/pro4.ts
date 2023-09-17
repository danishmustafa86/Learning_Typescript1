// 4 Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let ry:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filterarry=ry.filter((elm)=>elm%2==0);
let maparry=filterarry.map((elm)=>{
    elm=elm*elm
    return elm
})
console.log(maparry);














