var http = require('http');
var map = require('through2-map');
const port =process.argv[2];
var server = http.createServer( (req, res)=> {
 if (req.method != 'POST')
    res.end('Only send POST requests')

 req.pipe(map(chunk=> {
    chunk.toString().toUpperCase()
 })).pipe(res)
})

server.listen(port)