const express = require('express'); 
const authenticateToken = require("../middleware/auth");
const { getReports, getReport, createReport, editReport, updateReport, deleteReport } = require('../controllers/reportController');
const router = express.Router();

router.get('/reports', authenticateToken, getReports);
router.get('/report/:id', authenticateToken, getReport);
router.post('/report', authenticateToken, createReport);
router.put('/report_edit/:id', authenticateToken, editReport);
router.put('/report_update/:id', authenticateToken, updateReport);
router.delete('/report/:id', authenticateToken, deleteReport);

module.exports = router;
