// **18**. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.
 let locations:string[]=["Makkah","Madina","Turkey", "Kashmir","Sakardu","Lahore"]
 
 // • Print your array in its original order.
 console.log("my original arry",locations);
 
 // • Print your array in alphabetical order without modifying the actual list.
 let modification1:any[]=[...locations].sort()
 console.log("My modify arry as",modification1);
 
 
 // • Show that your array is still in its original order by printing it.
 console.log("my arry in original order",locations);
 
 // • Print your array in reverse alphabetical order without changing the order of the original list.
 let modification2:any[]=locations
 console.log("my arry in reverse order",modification2.reverse());
 
 // • Show that your array is still in its original order by printing it again.
 console.log("my original arry",[...locations]);
 
 // • Reverse the order of your list. Print the array to show that its
 // order has changed.
 let modification3:any[]=locations
 console.log("my arry reversing again order",modification3.reverse());
 
 // • Reverse the order of your list again. Print the list to show it’s back to its original order.
 let modification4:any[]=modification3
 console.log("my arry reversing again2 order",modification4.reverse());
 
 // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
 let modification5:any[]=modification4
 console.log("my arry srting again order",modification5.sort());
 
 // • Sort to change your array so it’s stored in reverse alphbetical order. Print the list to show that its order has changed.
 let modification6:any[]=modification5
 console.log("my arry reversing again3 order",modification6.reverse());



























