const os = require('os')

//info about current user
const user = os.userInfo();
// console.log(os);

//methode return this system uptime in secondes

const uptime = os.uptime()
console.log(`system uptime is ${uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);