const express = require('express');
const logger = require('./../utils/logger');
const familyService = require('./../services/family.service');
const { ok } = require('../utils/responseHandler');
const router = express.Router();

router.get('/', async (req, res) => {
    const families = await familyService.getFamilies();
    res.json(families);
});

router.get('/:id', async (req, res) => {
    const family = await familyService.getFamilyById(req.params.id);
    res.json(family);
});

router.post('/', async (req, res) => {
    const family = await familyService.createFamily(req.body);
    res.status(201).json(family);
});

router.put('/:id', async (req, res) => {
    const family = await familyService.updateFamily(req.params.id, req.body);
    res.json(family);
});

router.delete('/:id', async (req, res) => {
    await familyService.deleteFamily(req.params.id);
    res.json({
        status: 200,
        message: 'Family deleted successfully',
        data: null
    });
});

module.exports = router;