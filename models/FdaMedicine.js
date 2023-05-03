const mongoose = require('mongoose');
const FdaMedicineSchema= new mongoose.Schema({
    type:{
        type:String,
        required: false
    },
    fda_approved:{
        type:Boolean,
        required:true,
        default: true
    },
    medicine_name:{
        type:String,
        required: false
    },
    link_evidence:{
        type:String,
        required: false
    },
    link_image:{
        type:String,
        required: false
    },
    text_evidence_us:{
        type:String,
        required: true
    },
    text_evidence_vn:{
        type:String,
        required: true
    }
})

const FdaMedicine= mongoose.model('FdaMedicine',FdaMedicineSchema);
module.exports={FdaMedicine};
