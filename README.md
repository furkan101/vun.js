
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
 - `SetupDatabase(string directory)` Creates database directory you entered in directory parameter.
 - `CreateTable(string dbName)` Creates database file in directory with JSON file format.
 - `InsertData(string dbName, JSON data)` Inserts JSON object you entered in second to database you entered in first parameter.
 - `ReadAllData(string dbName)` Returns you all objects in database as an array.
 - `SearchData(string dbName, JSON objectToSearch)` Searches object you given in second param in database, returns you all objects matches as an array.  

# TODO
 - Fix SearchData's returning array issue.
 - Add DeleteTable function.
 - Add DeleteData function.
 - Add CreateUniqueID function.