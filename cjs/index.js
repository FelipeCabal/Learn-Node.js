const suma = require('./sum')
const os = require('node:os')

console.log(suma(1,2))
console.log('CPUS' , os.cpus())