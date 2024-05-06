const fs = require('fs/promises')

function print(msg){
    console.log(msg)
}

async function readFile(path){
   return await fs.readFile(path,'utf-8')
}

async function writeFile(path,data){
   return await fs.writeFile(path,JSON.stringify(data))
}

module.exports = {print,readFile,writeFile}