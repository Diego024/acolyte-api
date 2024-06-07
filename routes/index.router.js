const express = require('express');
const router = express.Router();

const familyRouter = require('./family.router');
const familyMemberRouter = require('./family-member.router');

router.use('/family', familyRouter);
router.use('/family-member', familyMemberRouter);

module.exports = router;