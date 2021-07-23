const express = require('express')
const router = express.Router()

const postController = require('../app/controllers/PostController')

router.get('/admin', postController.create);
router.post('/store', postController.store);
router.get('/:id', postController.show);

module.exports = router
