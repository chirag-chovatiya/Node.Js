const fs = require("fs");
const path = require("path");
const pathDir = path.join(__dirname,"Crude");
const filePath = `${pathDir}/input.txt`

// FILE WRITE
fs.writeFileSync(filePath,"This is testing file");

// FILE READ
// fs.readFile(filePath,"utf-8",(err,inputs)=>{
//     console.log(inputs);
// });

// // FILE UPDATES
// fs.appendFile(filePath," This Is Updated File",(err)=>{
//     if(!err) console.log("File is Updated success");
// });

// FILE RENAME
// fs.rename(filePath,`${pathDir}/orange.txt`,(err)=>{
//     if(!err) console.log(filePath);
// });

// FILE DELETE
// fs.unlinkSync(`${pathDir}/main.txt`);

