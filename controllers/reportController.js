const Report = require('../models/report');

// GET all reports
exports.getReports = async (req, res) => {
    try {
        const reports = await Report.find();
        res.json(reports);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// GET report by ID
exports.getReport = async (req, res) => {
    try {
        const { id } = req.params;
        const report = await Report.findById(id);
        if (!report) return res.status(404).json({ message: "Report not found" });
        res.json(report);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST new report
exports.createReport = async (req, res) => {
    try {
        const { title, detail, location, status } = req.body;
        const newReport = new Report({
            title,
            detail,
            location,
            status,
            report_at: new Date(),
            update_at: new Date()
        });
        await newReport.save();
        res.status(201).json(newReport);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


// PUT edit report by ID
exports.editReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, detail, location, report_at } = req.body;
        const editReport = await Report.findByIdAndUpdate(
            id,
            { title, detail, location, report_at, update_at: new Date() },
            { new: true, runValidators: true }
        );
        if (!editReport) {
            return res.status(404).send("Report not found");
        }
        res.json(editReport);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// PUT update report by ID
exports.updateReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updateReport = await Report.findByIdAndUpdate(
            id,
            { status, update_at: new Date() },
            { new: true, runValidators: true }
        );
        if (!updateReport) {
            return res.status(404).send("Report not found");
        }
        res.json(updateReport);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// DELETE report by ID
exports.deleteReport = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteReport = await Report.findByIdAndDelete(id);
        if (!deleteReport) {
            return res.status(404).send("Report not found");
        }
        res.status(200).json({ message: "Report deleted successfully" });
    } catch (err) {
        res.status(500).send(err.message);
    }
};