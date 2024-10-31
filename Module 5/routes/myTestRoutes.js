const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
res.send('Hello World!')
})
router.get('/test2', (req, res) => {
res.send('Second test')
})

module.exports = router;