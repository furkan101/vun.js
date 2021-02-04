const fs = require('fs')
const vunjs = require('./src/functions')

let json = {
    "name": "glorfin",
    "surname": "enes"
}

module.exports.load = function() {
    console.log('vun.js has been loaded.')
}