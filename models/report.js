const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    detail: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, required: true },
    report_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
}, { timestamps: { createdAt: 'report_at', updatedAt: 'update_at' } });

module.exports = mongoose.model('Report', reportSchema);
