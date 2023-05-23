const express= require('express');
const VnController = require('../controllers/VnMedicineController');
const FdaController = require('../controllers/FDAMedicineController');
const router= express.Router();
router.post("/api/vn-medicine-approved",VnController.addVnMedicineApproved);
router.post("/api/vn-medicine-not-approved",VnController.addVnMedicineNotApproved)
router.get("/api/all-vn-medicine",VnController.getVnMedicine);

router.post("/api/fda-medicine",FdaController.addFdaMedicine);
router.get("/api/fda-medicine",FdaController.getFdaMedicine)
module.exports= router;