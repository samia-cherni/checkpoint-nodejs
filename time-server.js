const net = require('net');
const port =process.argv[2];
const zeroFill = (i)=> {
    return (i < 10 ? '0' : '') + i
  }
const now = () => {
    var d = new Date();
    return d.getFullYear() + '-' +
      zeroFill(d.getMonth() + 1) + '-' +
      zeroFill(d.getDate()) + ' ' +
      zeroFill(d.getHours()) + ':' +
      zeroFill(d.getMinutes())
  }
const server = net.createServer(function (socket) {
    socket.end(now()+'\n');
})
server.listen(port);
