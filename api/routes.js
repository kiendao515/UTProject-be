const express= require('express');
const VnController = require('../controllers/VnMedicineController');
const FdaController = require('../controllers/FDAMedicineController');
const ComponentController = require("../controllers/ComponentController")
const router= express.Router();
router.post("/api/vn-medicine-approved",VnController.addVnMedicineApproved);
router.post("/api/vn-medicine-not-approved",VnController.addVnMedicineNotApproved)
router.get("/api/all-vn-medicine",VnController.getVnMedicine);
router.post("/api/vn-medicine/filter",VnController.getVnMedicineOfComponent)
router.post("/api/edit-vn-medicine", VnController.updateVNMedicine)
router.post("/api/delete-vn-medicine", VnController.deleteVnMedicine)

router.post("/api/fda-medicine",FdaController.addFdaMedicine);
router.get("/api/fda-medicine",FdaController.getFdaMedicine)
router.post("/api/edit-fda-medicine",FdaController.editFDAMedicine);
router.post("/api/delete-fda-medicine",FdaController.deleteFDAMedicine)

router.post("/api/add-component",ComponentController.addComponent)
router.get("/api/components",ComponentController.getComponent)
router.get("/api/total/components",ComponentController.getAllComponents)
router.post("/api/edit-component", ComponentController.editCompoment)
router.post("/api/delete-component", ComponentController.deleteComponent)
router.get('/api/approved-component',ComponentController.getApprovedComponent);
router.get('/api/not-approved-component',ComponentController.getNotApprovedComponent)
module.exports= router;