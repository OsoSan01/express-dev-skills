const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');
const path = require('path'); // Add this line to import the path module

// router.get('/', skillsController.index);
// router.get('/new', skillsController.new);
// router.get('/:id', skillsController.show);
// router.post('/', skillsController.create);
// router.delete('/:id', skillsController.delete);

router.get('/', skillsController.index); // Should render "index.ejs"
router.get('/new', skillsController.new); // Should render "new.ejs"
router.get('/:id', skillsController.show); // Should render "show.ejs"
router.get('/:id/edit', skillsController.edit); // Should render "edit.ejs"

// Use path.join to specify the correct path to the "index.ejs" file
router.get('/skills', (req, res) => {
  res.render(path.join('skills', 'index')); // The path will be "views/skills/index.ejs"
});

module.exports = router;