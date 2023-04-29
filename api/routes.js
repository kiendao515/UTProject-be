const express= require('express');
const VnController = require('../controllers/VnMedicineController');
const router= express.Router();
router.get("/api/vn-medicine",VnController.addVnMedicine);
router.get("/api/all-vn-medicine",VnController.getVnMedicine);
module.exports= router;