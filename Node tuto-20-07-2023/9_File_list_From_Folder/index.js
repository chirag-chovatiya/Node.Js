const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");

// for (let i=0; i<5;i++){
//     fs.writeFileSync(dirPath+"/Hello"+i+"txt","A simple file Test");
//     fs.writeFileSync(dirPath+`/Hello${i}.txt`,"A simple file Test");
// }

fs.readdir(dirPath, (err, files) => {
    files.forEach(input => {
        console.log("My File Name : ", input);
    })
});

