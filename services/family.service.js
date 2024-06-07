const Family = require('./../models/family.model');
const logger = require('./../utils/logger');
const { ok, created, internalServerError, notFound } = require('../utils/responseHandler');

const getFamilies = async () => {
    try {
        return ok(await Family.find());
    } catch (error) {
        logger.error("family.service.js getFamilies: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const getFamilyById = async (id) => {
    try {
        let family = await Family.findById(id);
        if (!family) return notFound('Family not found');
        return ok(family);
    }
    catch (error) {
        logger.error("family.service.js getFamilyById: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const createFamily = async (familyData) => {
    try {
        const family = new Family(familyData);
        await family.save();
        return created(family);
    } catch (error) {
        logger.error("family.service.js createFamily: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const updateFamily = async (id, familyData) => {
    try {
        let family = await Family.findById(id);
        if (!family) return notFound('Family not found');

        return ok(await Family.findByIdAndUpdate(id, familyData, { new: true }));
    } catch (error) {
        logger.error("family.service.js updateFamily: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

const deleteFamily = async (id) => {
    try {
        let family = await Family.findById(id);
        if (!family) return notFound('Family not found');

        await Family.findByIdAndDelete(id);
    } catch (error) {
        logger.error("family.service.js deleteFamily: " + error.message);
        return internalServerError('Internal Server Error: ' + error.message);
    }
};

module.exports = {
    getFamilies,
    getFamilyById,
    createFamily,
    updateFamily,
    deleteFamily
};