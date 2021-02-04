const VunJS = require('./index')
const vunjs = new VunJS()

vunjs.SetupDatabase('E:/VunDB/')
console.log(vunjs.SearchData('users', { "name": "glorfin" }))