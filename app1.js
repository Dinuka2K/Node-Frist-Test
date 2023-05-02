var http = require('http')

http.createServer(function(req,res){

    res.end("Welcome to homepage")
    
}).listen(8080)