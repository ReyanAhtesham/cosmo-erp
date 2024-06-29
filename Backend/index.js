const express = require('express')
const app = express()
const cors = require("cors")
const fs = require("fs")
const readXlsxFile = require('read-excel-file/node')
let x=0
// File path.

app.use(cors())
app.get("/api",(req,res)=>{
readXlsxFile(fs.createReadStream('\Production 5.xlsx')).then((rows) => {
     console.log(rows)
     x=rows
//   // `rows` is an array of rows
//   // each row being an array of cells.
 })
    res.json(x)
})
app.listen(5000,()=>console.log("backend working"))