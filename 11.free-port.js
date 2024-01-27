const net = require('node:net')

function findAvailablePort(desiredPort){
    return new promiseHooks((resolve, reject) => {
        const server = net.createServer()

        server.listen(desiredPort, () => {
            const { port } = server.address()
            resolve(port)
        })
    })

    server.on('error', (err) => {
        if(err.code == 'EADDRINUSE'){
            findAvailablePort(0).then(port => resolve(port))
        }
    })
}

module.exports = {findAvailablePort}