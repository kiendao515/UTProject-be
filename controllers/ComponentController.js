
const { VnMedicine } = require('../models/VnMedicine');
const XLSX = require('xlsx');
const { ActiveIngredient } = require('../models/Component');
const addComponent = (req, res) => {
    let { component, cure, gene } = req.body;
    let m = new ActiveIngredient({
        component: component,
        cure: cure,
        gene: gene
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
exports.getComponent = getComponent;
exports.addComponent = addComponent;