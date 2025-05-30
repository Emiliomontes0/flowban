const express = require('express');
const router = express.Router();
const formInstanceController = require('../Controllers/FormInstanceController');
const { uploadUserForms } = require("../middleware/multerConfig");
const authenticateToken = require('../middleware/authMiddleware');

router.post("/instances", uploadUserForms,authenticateToken, formInstanceController.createFormInstance);
router.get('/templates/:templateId/instances', authenticateToken,formInstanceController.getAllFormInstancesofTemplate);
router.get('/instances/:id', authenticateToken,formInstanceController.getFormInstanceById);
router.put('/instances/:id', authenticateToken,formInstanceController.updateFormInstance);
router.delete('/instances/:id', authenticateToken,formInstanceController.deleteFormInstance);
router.put("/instances/approve/:id", authenticateToken, formInstanceController.approveFormInstance);
router.put("/instances/deny/:id", authenticateToken,formInstanceController.denyFormInstance);

module.exports = router;
