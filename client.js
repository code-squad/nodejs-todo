const net = require('net');
const client = net.createConnection({ host: 'localhost', port: 50000 }, () => {
    console.log(`local address : ${client.localAddress}, local port : ${client.localPort}`);
    console.log(`remote address : ${client.remoteAddress}, remote port : ${client.remotePort}`);
});

client.on('data', (data) => {
    console.log(`server send data : ${data}`);
});

client.write('test data');