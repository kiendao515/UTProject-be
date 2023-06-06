
const { VnMedicine } = require('../models/VnMedicine');
const XLSX = require('xlsx')
const addVnMedicineApproved = (req,res) => {
    let {component,medicine_name, content, dosage_form,packing, company_name, circulation_permit}= req.body;
    let m = new VnMedicine({ 
            medicine_name: medicine_name,
            component: component,
            content: content,
            dosage_form: dosage_form,
            packing: packing,
            company_name: company_name !=undefined ? company_name: "Chưa có thông tin",
            circulation_permit: circulation_permit!=undefined ? circulation_permit: "Chưa có thông tin",
            approved: true
        });
    m.save().then(rs=>{
        return res.json({status:true,data:rs})
    });
}
const addVnMedicineNotApproved = (req,res)=>{
    let {component,medicine_name, content, dosage_form,packing, company_name}= req.body;
    let m = new VnMedicine({
            medicine_name: medicine_name,
            component: component,
            content: content,
            dosage_form: dosage_form,
            packing: packing,
            company_name: company_name !=undefined ? company_name: "Chưa có thông tin",
            approved: false
        });
    m.save().then(rs=>{
        return res.json({status:true,data:rs})
    });
}
const getVnMedicine = async (req,res)=>{
    let rs =await VnMedicine.find({}).populate('component');
    return res.json({ status: true, data:rs })
}
const getVnMedicineOfComponent = async(req,res)=>{
    let rs = await VnMedicine.find({component: req.body.component}).populate('component');
    return res.json({status:true, data:rs})
}
exports.addVnMedicineApproved = addVnMedicineApproved;
exports.getVnMedicine = getVnMedicine;
exports.addVnMedicineNotApproved = addVnMedicineNotApproved;
exports.getVnMedicineOfComponent = getVnMedicineOfComponent;