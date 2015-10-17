/**
 * Created by deepaksisodiya on 11/10/15.
 */


var exports = module.exports = {},
  dynamoose = require('dynamoose'),
  Users = dynamoose.model('Users');

exports.saveUser = function (req, res) {
  req.body.creationTime = new Date().getTime();
  req.body.userId = Math.random().toString(36).substring(7);
  Users.create(req.body, function (err, user) {
    if(err) {
      return res.status(500).json({'error' : 'error in saving user'});
    } else {
      res.json(user);
    }
  });
};

exports.getAllUsers = function (req, res) {
  Users.scan({}, function (err, users) {
    if(err) {
      return res.status(500).json({'error' : 'error in fetching users'});
    }
    res.json(users);
  });
};

exports.deleteUser = function (req, res) {
  var userId = req.params.userId;
  var creationTime = req.params.creationTime;
  Users.delete({userId: userId, creationTime: creationTime}, function (err) {
    if(err) {
      return res.status(500).json({'error' : 'error while deleting user'});
    }
    res.json({'status' : 'user deleted successfully'});
  });
};

exports.updateUser = function (req, res) {
  var userId = req.params.userId;
  var creationTime = req.params.creationTime;
  Users.update({userId: userId, creationTime: creationTime}, req.body, function (err) {
    if(err) {
      console.log(err);
      return res.status(500).json({'error':'error while updating user'});
    }
    res.json({'status' : 'user updated successfully'});
  });
};
