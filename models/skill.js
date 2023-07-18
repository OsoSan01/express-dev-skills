module.exports = {
    getAll,
    getOne
  };
  
  const devSkills = [
    {
      id: 1,
      name: 'JavaScript',
      difficulty: 'hard',
      mastered: "Not mastered",
      confidence: 'not existent'
    },
    {
      id: 2,
      name: 'HTML',
      difficulty: 'easy',
      mastered: "Not mastered",
      confidence: 'kind of'
    },
    {
      id: 3,
      name: 'Node and Express',
      difficulty: 'doom',
      mastered: "Not mastered",
      confidence: 'I will die'
    },
    {
      id: 4,
      name: 'Knife and cooking',
      difficulty: 'God',
      mastered: "Samurai",
      confidence: 'My enemies will die'
    }
  ];
  
  function getAll() {
    return devSkills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return devSkills.find(e => e.id === id);
  }
  
  