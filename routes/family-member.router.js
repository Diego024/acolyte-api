const express = require('express');
const router = express.Router();
const familyMemberService = require('./../services/family-member.service');

router.get('/', async (req, res) => {
    const response = await familyMemberService.getFamilyMembers();
    res.json(response);
});

router.get('/dui/:dui', async (req, res) => {
    const response = await familyMemberService.getFamilyMemberByDui(req.params.dui);
    res.json(response);
});

router.get('/id/:id', async (req, res) => {
    const response = await familyMemberService.getFamilyMemberById(req.params.id);
    res.json(response);
});

router.get('/family/:familyId', async (req, res) => {
    const response = await familyMemberService.getFamilyMembersByFamily(req.params.familyId);
    res.json(response);
});

router.post('/', async (req, res) => {
    const response = await familyMemberService.createFamilyMember(req.body);
    res.status(201).json(response);
});

router.put('/:id', async (req, res) => {
    const response = await familyMemberService.updateFamilyMember(req.params.id, req.body);
    res.json(response);
});

router.delete('/:id', async (req, res) => {
    await familyMemberService.deleteFamilyMember(req.params.id);
    res.json({
        status: 200,
        message: 'Family Member deleted successfully',
        data: null
    });
});

module.exports = router;