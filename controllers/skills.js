const skill = require('../models/skill');

function index(req, res) {
  const skills = skill.getAll();
  res.render('skills/index', { skills });
}

function show(req, res) {
  const selectedSkill = skill.getOne(req.params.id);
  res.render('skills/show', { skill: selectedSkill });
}

module.exports = {
  index,
  show
};