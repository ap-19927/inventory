const router = require('express').Router();
      create_controller = require('./controllers/write/create');
      read_controller = require('./controllers/read/read');
      update_controller = require('./controllers/write/update');
      delete_controller = require('./controllers/write/delete');

router.get('/create', create_controller.create);
router.post('/create', create_controller.create_post);
router.get('/', read_controller.read);
router.get('/deleted', read_controller.deleted);
router.get('/:id', read_controller.readItem);
router.get('/update/:id', update_controller.update);
router.post('/update/:id', update_controller.update_post);
router.get('/delete/:id', delete_controller.delete);
router.post('/delete/:id', delete_controller.delete_post);
router.get('/undelete/:id', delete_controller.unDelete);
router.post('/undelete/:id', update_controller.update_post);
module.exports = router;
