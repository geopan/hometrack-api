'use strict';

const {Router} = require('express');
const AddressController = require('./address.controller');

let router = Router();

const address = new AddressController();

router.post('/', address.filtered);

module.exports = router;
