const mongoose = require('mongoose');

const FamilySchema = new mongoose.Schema({
    housingType: {
        type: String,
        required: true,
        trim: true
    },
    familyRisk: {
        type: String,
        required: true,
        trim: true
    },
    municipality: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: Object,
        required: false,
        default: null
    }
});

module.exports = mongoose.model('Family', FamilySchema);