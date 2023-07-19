module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};  
  
  const devSkills = [
    {
      id: 175135,
      name: 'JavaScript',
      difficulty: 'hard',
      mastered: false,
      confidence: 'not existent'
    },
    {
      id: 278564,
      name: 'HTML',
      difficulty: 'easy',
      mastered: false,
      confidence: 'kind of'
    },
    {
      id: 335634,
      name: 'Node and Express',
      difficulty: 'doom',
      mastered: false,
      confidence: 'I will die'
    },
    {
      id: 485447,
      name: 'Knife and cooking',
      difficulty: 'God',
      mastered: true,
      confidence: 'My enemies will die'
    }
  ];
  
  function update(id, updatedSkill){
    id = parseInt(id);
    const skill = devSkills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill)
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = devSkills.findIndex(skill => skill.id === id);
    if (idx !== -1) {
      devSkills.splice(idx, 1);
    }
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.difficulty = 'unknown';
    skill.mastered = false;
    skill.confidence = 'unsure';
    devSkills.push(skill);
  }

  function getAll() {
    return devSkills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return devSkills.find(e => e.id === id);
  }
  

  

