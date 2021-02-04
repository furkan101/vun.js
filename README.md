
# vun.js

VunJS is a simple database library written in Node.js for inserting, reading and deleting data in JSON format.

# Contributing
All you have to do is forking repository, coding stuff, committing and creating pull request. I suggest using GitHub Desktop.  I have list of TODO for vun.js so you can see what this project needs.

# Installation

To install vun.js, use following command on your terminal:

```
npm install vun.js --save
```

To use vun.js in your project, add following line:

```javascript
const VunJS = require('vun.js')
const vunjs = new VunJS()
```

# Function List
 - `SetupDatabase(string directory)` Creates database directory you entered in directory param.
 - `CreateTable(string dbName)` Creates database file in directory with JSON file format.
 - `DeleteTable(string dbName)` Deletes the table you entered in dbName param if it exists.
 - `InsertData(string dbName, JSON data)` Inserts JSON object you entered in second param to database you entered in first param.
 - `DeleteData(string dbName, JSON data, repeat = 0)` Deletes data you gave in second param from dbName. If repeat is set to 0, which is default, it will delete only first data. If set to more than 0, it will delete all datas until reaching repeat number.
 - `ReadAllData(string dbName)` Returns you all objects in database as an array.
 - `SearchData(string dbName, JSON objectToSearch)` Searches object you gave in second param in database, returns all objects matches as an array.
 - `DataCount(string dbName)` Returns row count of dbName.

# Example
```javascript
const VunJS = require('vun.js') // Creating our class from source file.
const vunjs = new VunJS() // Creating new object from our class.

vunjs.SetupDatabase('./database/') // Setting up database path.
vunjs.CreateTable('users') // Creating our table named users as JSON file.
vunjs.InsertData('users', { name: "test", surname: "blabla" }) // Inserting new data to users database as JSON object.
vunjs.SearchData('users', { surname: "blabla" }) // Searching data if any of it mathches our JSON object. It will return an array.
vunjs.DeleteData('users', { name: "test" }, vunjs.DataCount('users')) // Delete all data in users table.
```  

# TODO
 - Fix SearchData's returning array issue.
 - Add CreateUniqueID function.