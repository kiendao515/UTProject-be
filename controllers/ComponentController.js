
const { VnMedicine } = require('../models/VnMedicine');
const XLSX = require('xlsx');
const { ActiveIngredient } = require('../models/Component');
const addComponent = (req,res) => {
    let {component,cure,gene}= req.body;
    let m = new ActiveIngredient({
            component: component, 
            cure: cure, 
            gene: gene
    });
    m.save().then(rs=>{
        return res.json({status:true,data:rs})
    });
}
const getComponent= async (req,res)=>{
    let rs =await ActiveIngredient.find({});
    return res.json({ status: true, data:rs })
}
exports.getComponent = getComponent;
exports.addComponent = addComponent;