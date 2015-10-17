/**
 * Created by deepaksisodiya on 11/10/15.
 */


var express = require('express'),
  router = express.Router(),
  userController = require('./controller.js');

router.post('/users', userController.saveUser);

router.get('/users', userController.getAllUsers);

router.delete('/users/:userId/:creationTime', userController.deleteUser);

router.put('/users/:userId/:creationTime', userController.updateUser);

module.exports = router;