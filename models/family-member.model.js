const mongoose = require('mongoose');

const FamilyMemberSchema = new mongoose.Schema({
    family: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Family'
    },
    dui: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    birthdate: {
        type: String,
        required: true,
        trim: true
    },
    schoolGrade: {
        type: String,
        required: true,
        trim: true
    },
    canRead: {
        type: Boolean,
        required: true,
    },
    canWrite: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);