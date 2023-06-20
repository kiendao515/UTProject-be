
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
        const page = parseInt(req.query.page) || 1; // Lấy số trang từ query parameter, mặc định là trang đầu tiên (1)
        const perPage = 5; // Số lượng bản ghi trên mỗi trang

        const totalDocuments = await ActiveIngredient.countDocuments({});
        const totalPages = Math.ceil(totalDocuments / perPage);

        const skip = (page - 1) * perPage;
        let rs = await ActiveIngredient.find({}).skip(skip).limit(perPage).lean();

        for (let i = 0; i < rs.length; i++) {
            let vnMedicines = await VnMedicine.find({ component: rs[i]._id }).lean();
            rs[i] = { ...rs[i], medicines: vnMedicines };
        }

        console.log(rs);
        return res.json({ status: true, data: rs, metadata: { currentPage: page ,totalPage: totalPages} });
    } catch (error) {
        return res.json({ status: false, error: error.message });
    }
};


exports.getComponent = getComponent;
exports.addComponent = addComponent;