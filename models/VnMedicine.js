const mongoose = require('mongoose');
const { ActiveIngredient } = require('./Component');
const vnMedicineSchema= new mongoose.Schema({
    medicine_name:{
        type:String,
        required: false
    },
    component:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "ActiveIngredient"
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
