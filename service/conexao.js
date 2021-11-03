const mysql = require('mysql')

conexao = mysql.createConnection( {
    user : 'root' ,
    database : 'agendaPetShopEu' ,
    password : 'root' ,
    host : 'localhost' ,
    port : 3306,  
})

module.exports = conexao