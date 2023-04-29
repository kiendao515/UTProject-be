
const { VnMedicine } = require('../models/VnMedicine');
const XLSX = require('xlsx')
const addVnMedicine = () => {
    const workbook = XLSX.readFile('/Users/lananh/Documents/study/20222/datkktmt/UTProject-be /controllers/medicine.xlsx');
    const sheetName = workbook.SheetNames[3];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    //console.log(jsonData);
    jsonData.forEach(element => {
        console.log(element);
        let bike = new VnMedicine({
            component: element.__EMPTY, 
            cure: element.__EMPTY_1, 
            gene: element.__EMPTY_2, 
            medicine_name: element.__EMPTY_3,
            content: element.__EMPTY_4,
            dosage_form: element.__EMPTY_5,
            packing: element.__EMPTY_6,
            company_name: element.__EMPTY_7,
            circulation_permit: element.__EMPTY_8
        });
        bike.save();
    });
}
const getVnMedicine = async (req,res)=>{
    let rs =await VnMedicine.find({});
    return res.json({ status: true, data:rs })
}
exports.addVnMedicine = addVnMedicine;
exports.getVnMedicine = getVnMedicine;