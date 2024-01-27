const fs = require('node:fs')
const { text } = require('stream/consumers')

console.log('Leyendo el primer archivo ....')
fs.readFile('./archivo.txt', 'utf-8', (err,text) =>(
    console.log('Primer texto: ',text)
) )

console.log('Hacer cosas mientras lee el archivo ....')

console.log('Leyendo el segundo archivo ....')
fs.readFile('./archivo2.txt', 'utf-8', (err,text2) => (
    console.log('Segundo texto: ',text2)
))

