var express = require('express');
var router = express.Router();
const skill = require('../models/skill');


router.get('/', (req, res) => {
  const skills = skill.getAll();
  res.render('skills/index', { skills });
});

module.exports = router;