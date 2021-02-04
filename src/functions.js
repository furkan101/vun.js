const vunVar = require('./variables')
const fs = require('fs')

module.exports.SetupDatabase = async function(dir) {
    vunVar.path = dir

    fs.mkdir(dir, (err) => {
        console.log('Database has been set up correctly.')
    })
}

module.exports.CreateDatabase = async function(dbName) {
    fs.createWriteStream(`${vunVar.path}/${dbName}.json`)
    console.log('Database has been created.')
}

module.exports.InsertData = async function(dbName, newData) {
    fs.readFile(`${vunVar.path}/${dbName}.json`, 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
        }
        else {
            var jsonArray = JSON.parse(data)
            jsonArray.push(newData)

            fs.writeFile(`${vunVar.path}/${dbName}.json`, JSON.stringify(jsonArray), (err) => {
                if(err) {
                    console.log(err)
                }
                else {
                    console.log(`New data has been successfully added to ${dbName}`)
                }
            })
        }
    })
}

module.exports.ReadData = async function(dbName) {
    fs.readFile(`${vunVar.path}/${dbName}.json`, 'utf-8', (err, data) => {
        console.log(JSON.parse(data))
    })
}