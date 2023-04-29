const express = require('express');
const connectionDB= require('./connection');
const route= require('./api/routes');
const app = express();
var cors = require('cors');
connectionDB();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const corsOpts = {
    origin: '*',
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],

    allowedHeaders: [
        'Content-Type',
        'Authorization'
    ],
};

app.use(cors(corsOpts));
app.use(route,function(req,res,next){
    next()
});

app.all('*',(req,res)=>{
    res.json({status:'fail',msg:'-.-Kiểm tra kĩ lại route api'})
})

app.listen(5000,(req,res)=>{
   console.log("server chay o port 5000")
})