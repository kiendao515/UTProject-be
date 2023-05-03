
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
    let rs = await FdaMedicine.find({});
    return res.json({ status: true, data: rs })
}
exports.addFdaMedicine = addFdaMedicine;
exports.getFdaMedicine = getFdaMedicine;