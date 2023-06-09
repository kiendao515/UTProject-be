
const { FdaMedicine } = require('../models/FdaMedicine');
const addFdaMedicine = async(req,res) => {
    let {type,
    fda_approved,
    medicine_name,
    link_evidence,
    link_image, text_evidence_us, text_evidence_vn}= req.body;
    let fda = new FdaMedicine({
        type:type,
        fda_approved: fda_approved,
        medicine_name : medicine_name,
        link_evidence: link_evidence,
        link_image : link_image,
        text_evidence_us: text_evidence_us,
        text_evidence_vn: text_evidence_vn
    });
    fda.save().then(rs=>{
        return res.json({
            status:true,
            data:rs
        })
    })

}
const getFdaMedicine = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Lấy số trang từ query parameter, mặc định là trang đầu tiên (1)
        const perPage = 5; // Số lượng bản ghi trên mỗi trang

        const totalDocuments = await FdaMedicine.countDocuments({});
        const totalPages = Math.ceil(totalDocuments / perPage);

        const skip = (page - 1) * perPage;
        let rs = await FdaMedicine.find({}).skip(skip).limit(perPage).lean();

        console.log(rs);
        return res.json({ status: true, data: rs, metadata: { currentPage: page, totalPage : totalPages } });
    } catch (error) {
        return res.json({ status: false, error: error.message });
    }
};
const editFDAMedicine = async(req,res)=>{
    try {
        let {medicineId,type,
            fda_approved,
            medicine_name,
            link_evidence,
            link_image, text_evidence_us, text_evidence_vn} = req.body;
        let i = await FdaMedicine.findOneAndUpdate({_id: medicineId},{
            type: type,
            fda_approved: fda_approved,
            medicine_name: medicine_name,
            link_evidence: link_evidence,
            link_image: link_image,
            text_evidence_us: text_evidence_us,
            text_evidence_vn: text_evidence_vn
        },{
            new: true 
        })
        if(!i){
            return res.json({status:false, msg: 'MedicineId is not found'})
        }
        return res.json({status: true, data: i})
    } catch (error) {
        return res.json({status:false, error: error.message})
    }
}
const deleteFDAMedicine = async(req, res)=>{
    try {
        let {medicineId} = req.body;
        let i = await FdaMedicine.findOneAndRemove({_id: medicineId});
        if(!i){
            return res.json({status:false, msg: 'medicineId is not found'})
        }
        return res.json({status: true, msg : "Delete successfully"})
    } catch (error) {
        return res.json({status: false, error: error.message})
    }
}
exports.addFdaMedicine = addFdaMedicine;
exports.getFdaMedicine = getFdaMedicine;
exports.editFDAMedicine = editFDAMedicine;
exports.deleteFDAMedicine = deleteFDAMedicine;