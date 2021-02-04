const fs = require('fs')

const vunFunc = require('./src/functions')
const vunVar = require('./src/variables')

let json = {
    "name": "glorfin",
    "surname": "enes"
}

vunFunc.SetupDatabase('E:/VunDB/')
/*vunFunc.CreateDatabase('users')
vunFunc.InsertData('users', json)
vunFunc.InsertData('users', json)*/
vunFunc.ReadData('users')