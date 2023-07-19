const skill = require('../models/skill');



function index(req, res) {
  const skills = skill.getAll();
  const time = new Date().toLocaleTimeString(); // Assuming you want to display the time in the header
  res.render('skills/index', { title: 'My Skills', skills, time });
}

function show(req, res) {
  const selectedSkill = skill.getOne(req.params.id);
  res.render('skills/show', { title: 'Skill Details', skill: selectedSkill }); //can't forget to update the functions on the controllers in order to show everything
}

function update(req, res) {
  req.body.mastered = !!req.body.mastered //have booleans trully booleands even with changing the value
  skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}


function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit Your skills',
    skill
  });

}

function deleteSkill(req, res) {
  skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
    skill.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill' });
}


module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};