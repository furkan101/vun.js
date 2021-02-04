const fs = require('fs')

let path = ""

module.exports = function() {

    this.CreateTable = (dbName) => {

        fs.createWriteStream(`${path}/${dbName}.json`)

        fs.writeFile(`${path}/${dbName}.json`, "[]", (err) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log(`Table ${dbName} has been created.`)
            }
        })
    }

    this.InsertData = (dbName, newData) => {

        fs.readFile(`${path}/${dbName}.json`, 'utf-8', (err, data) => {
            if(err) {
                console.log(err)
            }
            else {
                var jsonArray = JSON.parse(data)
                jsonArray.push(newData)
    
                fs.writeFile(`${path}/${dbName}.json`, JSON.stringify(jsonArray), (err) => {
                    if(err) {
                        console.log(err)
                    }
                    else {
                        console.log(`New data has been successfully added to ${dbName}.`)
                    }
                })
            }
        })
    }

    this.SetupDatabase = (dir) => {

        path = dir
    
        fs.mkdir(dir, (err) => { console.log('Database has been set up correctly.') })
    }

    this.ReadAllData = (dbName, callback) => {

        fs.readFile(`${path}/${dbName}.json`, 'utf-8', (err, data) => {
            callback(JSON.parse(data))
        })
    }

    this.SearchData = (dbName, searchData, callback) => {

        var arr = []

        fs.readFile(`${path}/${dbName}.json`, 'utf-8', (err, data) => {

            if(err) {
                console.error(`Database ${dbName} does not exists.`)
            }
            else {
                var jsonData = JSON.parse(data)

                for(let i = 0; i < jsonData.length; i++) {

                    let dataToSearch = JSON.stringify(searchData).substring(1).slice(0,-1)

                    if(JSON.stringify(jsonData[i]).includes(dataToSearch)) {
                        arr.push(jsonData[i])
                    }
                }
            }

            callback(arr)
        })
    }

    this.DeleteData = (dbName, searchData, repeat = 0) => {

        let arr = new Array()

        fs.readFile(`${path}/${dbName}.json`, 'utf-8', (err, data) => {
            var jsonData = JSON.parse(data)

            for(let i = 0; i < jsonData.length; i++) {

                let dataToSearch = JSON.stringify(searchData).substring(1).slice(0,-1)

                if(!JSON.stringify(jsonData[i]).includes(dataToSearch)) {
                    arr.push(jsonData[i])
                }

                if(repeat != 0 && i == repeat) {
                    break
                }
            }

            fs.writeFile(`${path}/${dbName}.json`, JSON.stringify(arr), (err) => {
                if(err) {
                    console.log(err)
                }
                else {
                    console.log(`Data(s) has been deleted from ${dbName}.`)
                }
            })
        })
    }

    this.DataCount = (dbName) => {

        let dataCount = 0

        fs.readFile(`${path}/${dbName}.json`, 'utf-8', (err, data) => {
            if(err) {
                console.log(err)
            }
            else {
                var jsonData = JSON.parse(data)

                for(let i = 0; i < jsonData.length; i++) {
                    dataCount++
                }    
            }
        })

        return dataCount
    }

    this.DeleteTable = (dbName) => {
        fs.unlink(`${path}/${dbName}.json`, err => {
            if(err) {
                console.error(err)
            }
            else {
                console.log('Database has been deleted successfully.')
            }
        })
    }
}