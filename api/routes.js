const express= require('express');
const VnController = require('../controllers/VnMedicineController');
const FdaController = require('../controllers/FDAMedicineController');
const ComponentController = require("../controllers/ComponentController")
const router= express.Router();
router.post("/api/vn-medicine-approved",VnController.addVnMedicineApproved);
router.post("/api/vn-medicine-not-approved",VnController.addVnMedicineNotApproved)
router.get("/api/all-vn-medicine",VnController.getVnMedicine);
router.post("/api/vn-medicine/filter",VnController.getVnMedicineOfComponent)

router.post("/api/fda-medicine",FdaController.addFdaMedicine);
router.get("/api/fda-medicine",FdaController.getFdaMedicine)

router.post("/api/add-component",ComponentController.addComponent)
router.get("/api/components",ComponentController.getComponent)
module.exports= router;