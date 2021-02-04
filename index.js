const fs = require('fs')

const VunJS = require('./src/functions')
const vunjs = new VunJS()

module.exports.load = function() {
    console.log('vun.js has been loaded.')
}

vunjs.SetupDatabase('E:/VunDB/')
console.log(vunjs.SearchData('users', { name: 'Frex' } ))