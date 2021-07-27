const express = require('express')
const router = express.Router()

const postController = require('../app/controllers/PostController')

router.get('/admin', postController.create);
router.get('/admin/trash', postController.trash);
router.get('/admin/show', postController.showPost);
router.get('/admin/:id/edit', postController.edit);
router.put('/admin/:id', postController.update);
router.post('/admin/actions', postController.action);
router.post('/admin/trash/actions', postController.actionTrash);
router.patch('/admin/:id/restore', postController.restore);
router.delete('/admin/:id', postController.delete);
router.delete('/admin/:id/real', postController.realDelete);
router.post('/store', postController.store);
router.get('/:id', postController.show);

module.exports = router
