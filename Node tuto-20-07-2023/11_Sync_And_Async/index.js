// Synchronous = In Synchronous operations tasks are performed one at time
// synchronous ma program run thay tyare je file lode thati hoy te puri na thay tya sudhi biji 
// file load thati nathi 


// Asynchronous = In Asynchronous , Second task do not wait to finish first task
// asynchronous ma jyare peli file run thay pachhi te biji file ni wait nathi kartu te badhi file 
// badhi file puri na thay tya sudhi run thay jay chhe

console.log("First exc...");

setTimeout(()=>{
    console.log("Second exc...");
},2000)

console.log("Third exc...");

