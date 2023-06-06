const mongoose = require('mongoose');
const activeIngredientSchema= new mongoose.Schema({
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
    }
})

const ActiveIngredient= mongoose.model('ActiveIngredient',activeIngredientSchema);
module.exports={ActiveIngredient};
