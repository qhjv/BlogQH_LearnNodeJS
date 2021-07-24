const express = require('express')
const router = express.Router()

const postController = require('../app/controllers/PostController')

router.get('/admin', postController.create);
router.get('/admin/show', postController.showPost);
router.get('/admin/:id/edit', postController.edit);
router.put('/admin/:id', postController.update);
router.post('/store', postController.store);
router.get('/:id', postController.show);

module.exports = router
