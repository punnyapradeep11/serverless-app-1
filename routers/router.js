var express= require('express');
var router = express.Router();


router.get('/hello', (req, res) => {
    res.send('hello !!!Welcome to serverless');
});
router.get('/api2', (req, res) => {
    res.send('hello !!!Welcome to serverless - api2');
});

module.exports = router;