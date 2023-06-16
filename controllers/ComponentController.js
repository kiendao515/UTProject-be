
const { VnMedicine } = require('../models/VnMedicine');
const XLSX = require('xlsx');
const { ActiveIngredient } = require('../models/Component');
const addComponent = (req, res) => {
    let { component, cure, gene ,approved} = req.body;
    let m = new ActiveIngredient({
        component: component,
        cure: cure,
        gene: gene, 
        approved: approved
    });
    m.save().then(rs => {
        return res.json({ status: true, data: rs })
    });
}
const getComponent = async (req, res) => {
    try {
        let rs = await ActiveIngredient.find({}).lean();
        for (var i = 0; i < rs.length; i++) {
            let vnMedicines = await VnMedicine.find({ component: rs[i]._id }).lean()
            rs[i] ={...rs[i],medicines: vnMedicines}
        }
        console.log(rs);
        return res.json({ status: true, data: rs })
    } catch (error) {
        return res.json({ status: false, error: error.message });
    }

}
const editCompoment = async(req,res)=>{
    try {
        let {componentId, cure, gene, component, approved} = req.body;
        let i = await ActiveIngredient.findOneAndUpdate({_id: componentId},{
            component: component,
            cure: cure,
            gene: gene,
            approved: approved
        },{
            new: true 
        })
        if(!i){
            return res.json({status:false, msg: 'ComponentId is not found'})
        }
        return res.json({status: true, data: i})
    } catch (error) {
        return res.json({status:false, error: error.message})
    }
}
const deleteComponent = async(req, res)=>{
    try {
        let {componentId} = req.body;
        let i = await ActiveIngredient.findOneAndRemove({_id: componentId})
        let medicines = await VnMedicine.find({component: componentId})
        for (var j =0 ;j < medicines.length; j++){
            await VnMedicine.findOneAndRemove({_id: medicines[j]._id})
        }
        if(!i){
            return res.json({status:false, msg: 'ComponentId is not found'})
        }
        return res.json({status: true, msg : "Delete successfully"})
    } catch (error) {
        return res.json({status: false, error: error.message})
    }
}
exports.getComponent = getComponent;
exports.addComponent = addComponent;
exports.editCompoment = editCompoment;
exports.deleteComponent = deleteComponent;