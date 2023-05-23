
const { VnMedicine } = require('../models/VnMedicine');
const XLSX = require('xlsx')
const addVnMedicineApproved = (req,res) => {
    let {component,cure,gene,medicine_name, content, dosage_form,packing, company_name, circulation_permit}= req.body;
    console.log(company_name);
    let m = new VnMedicine({
            component: component, 
            cure: cure, 
            gene: gene, 
            medicine_name: medicine_name,
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
    let {component,cure,gene,medicine_name, content, dosage_form,packing, company_name}= req.body;
    let m = new VnMedicine({
            component: component, 
            cure: cure, 
            gene: gene, 
            medicine_name: medicine_name,
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
    let rs =await VnMedicine.find({});
    return res.json({ status: true, data:rs })
}
exports.addVnMedicineApproved = addVnMedicineApproved;
exports.getVnMedicine = getVnMedicine;
exports.addVnMedicineNotApproved = addVnMedicineNotApproved;