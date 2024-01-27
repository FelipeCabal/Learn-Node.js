const path = require('node:path')

// barra espaceadora de carpetas segun SO
console.log(path.sep)

//Unir rutas con path join
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

const base = path.basename('/temp/wido-secret-file/pasword.txt', '.txt')
console.log(base)

const extension = path.extname('my.super.image.jgp')
console.log(extension)