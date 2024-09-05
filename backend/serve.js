const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(cors);

const DB = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password : '',
        database : 'contact_list'
    }
)

DB.connect((err) => {
    if (err){
        throw err;
    }
    console.log('conexion exitosa!!')
})


app.get('/api/contacts_', (req,res) => {
    const SQL_QUERY ='SELECT * FROM contacts_';
    DB.query(SQL_QUERY, (err, result) => {
        if(err){
            throw err;
        }
        res.json(result)
    })
})

app.listen(PORT, ()=>{
    console.log(`servidor escuchado en http://localhost:${PORT}`)
})
