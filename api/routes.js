const express= require('express');
const VnController = require('../controllers/VnMedicineController');
const FdaController = require('../controllers/FDAMedicineController');
const router= express.Router();
router.get("/api/vn-medicine",VnController.addVnMedicine);
router.get("/api/all-vn-medicine",VnController.getVnMedicine);

router.post("/api/fda-medicine",FdaController.addFdaMedicine);
router.get("/api/fda-medicine",FdaController.getFdaMedicine)
module.exports= router;