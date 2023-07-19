const http = require('http')

http.createServer((req, res) => {
    res.write("Hello Node Js");
    res.end();
}).listen(9700);

