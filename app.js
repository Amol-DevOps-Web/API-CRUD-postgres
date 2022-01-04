const express = require('express')

const app = express()
const db =require('./database');

app.use(express.json()) //=>req.body
db.connect()
//ROUTES...!
app.post('/insertData',async(req,res)=>{
    try{
        let firstname='sushant'
        let lastname='pgm'
        let email='xyzpgm@gmai.com'
        let mobile='8830631098'
        let  job= 'Civil engneer'
        let passwords='Life@1234'
      const {fname} = req.body;
      
      db.connect()
      const insertNew = await db.query(
      "INSERT INTO accountdetail(firstname,lastname,email,mobile,job,passwords) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [firstname,lastname,email,mobile,job,passwords]);
      res.json(insertNew)
      console.log("insert done..")
    }catch(err){
        console.log("Error in the inserting the data into datatbase");
        console.log(err.message);
    }
})


// Display Data from the Database
app.get('/insertData', async(req,res)=>{
    try{
    const getData = await db.query('SELECT * FROM accountdetail')
         res.json(getData.rows);
        console.log("Dispaly Data succesfulyy....")
    }catch(err){
        console.log(err.message)
    }   
})

app.get('/insertData/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const getData = await db.query('SELECT * FROM accountdetail where reg_id = $1',[id])
        res.json(getData.rows);
        console.log("Dispaly Data succesfulyy....")
    }catch(err){
        console.log(err.message)
    }   
})


//Update the Database from data
app.put('/updateData/:id',async(req,res)=>{
    try{
         const {id} = req.params;
         const {mobile} = req.body;
         console.log(mobile)
         const updataDatas = await db.query("Update accountdetail SET mobile =$1 where reg_id=$2",[id, mobile])
         res.json(updataDatas)
         console.log("update successfully...")
    }catch(err){ 
       console.log(err.message)
    }
})

app.delete('/deleteData/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteDatas = await db.query("DELETE from accountdetail where reg_id=$1",[id]);
        console.log("Delete Data from the database")
    }catch(err){
        console.log(err.message);
    }
})
app.listen(8080,()=>{
    console.log("8080 port server started....")
})