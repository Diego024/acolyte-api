const FamilyMember = require('../models/family-member.model');
const Family = require('../models/family.model');
const logger = require('./../utils/logger');
const { ok, created, internalServerError, notFound } = require('../utils/responseHandler');

const getFamilyMembers = async () => {
    try {
        return ok(await FamilyMember.find().populate('family'));
    } catch (error) {
        logger.error("family-member.service.js getFamilyMembers: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const getFamilyMemberByDui = async (dui) => {
    try {
        let familyMember = await FamilyMember.findOne({ dui: dui }).populate('family');
        if (!familyMember) return notFound('Family Member not found');
        return ok(familyMember);
    } catch (error) {
        logger.error("family-member.service.js getFamilyMemberByDui: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const getFamilyMemberById = async (id) => {
    try {
        let familyMember = await FamilyMember.findById(id).populate('family');
        if (!familyMember) return notFound('Family Member not found');
        return ok(familyMember);
    } catch (error) {
        logger.error("family-member.service.js getFamilyMemberById: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const getFamilyMembersByFamily = async (familyId) => {
    try {
        let familyMembers = await FamilyMember.find({ family: familyId });
        if (!familyMembers) return notFound('Family Members not found');
        return ok(familyMembers);
    } catch (error) {
        logger.error("family-member.service.js getFamilyMembersByFamily: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const createFamilyMember = async (familyMemberData) => {
    try {
        const familyMember = new FamilyMember(familyMemberData);
        let savedFamilyMember = await familyMember.save();

        return created(savedFamilyMember);
    } catch (error) {
        logger.error("family-member.service.js createFamilyMember: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const updateFamilyMember = async (id, familyMemberData) => {
    try {
        let familyMember = await FamilyMember.findById(id);
        if (!familyMember) return notFound('Family Member not found');

        return ok(await FamilyMember.findByIdAndUpdate(id, familyMemberData, { new: true }));
    } catch (error) {
        logger.error("family-member.service.js updateFamilyMember: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const deleteFamilyMember = async (id) => {
    try {
        let familyMember = await FamilyMember.findById(id);
        if (!familyMember) return notFound('Family Member not found');

        await FamilyMember.findByIdAndDelete(id);
        return ok({ message: 'Family Member deleted successfully' });
    } catch (error) {
        logger.error("family-member.service.js deleteFamilyMember: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

module.exports = {
    getFamilyMembers,
    getFamilyMemberByDui,
    getFamilyMemberById,
    getFamilyMembersByFamily,
    createFamilyMember,
    updateFamilyMember,
    deleteFamilyMember
};