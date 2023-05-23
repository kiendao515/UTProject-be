const mongoose = require('mongoose');
const vnMedicineSchema= new mongoose.Schema({
    component:{
        type:String,
        required: false
    },
    cure:{
        type:String,
        required:false
    },
    gene:{
        type:String,
        required: false
    },
    medicine_name:{
        type:String,
        required: false
    },
    content:{
        type:String,
        required: false
    },
    dosage_form:{
        type:String,
        required: false
    },
    packing:{
        type:String,
        required: false
    },
    company_name:{
        type:String,
        required: true,
        default: "Chưa có thông tin"
    },
    circulation_permit:{
        type:String,
        required:false
    },
    approved:{
        type: Boolean,
        required: true
    }
})

const VnMedicine= mongoose.model('VnMedicine',vnMedicineSchema);
module.exports={VnMedicine};
