let express = require('express');
let router = express.Router();
let upload = require('../controllers/aws.controller')

 
router.post('/', upload.upload, upload.uploadImage);
 
module.exports = router;