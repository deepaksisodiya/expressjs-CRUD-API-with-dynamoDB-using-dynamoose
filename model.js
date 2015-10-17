/**
 * Created by deepaksisodiya on 11/10/15.
 */


var dynamoose = require('dynamoose');
var Schema = dynamoose.Schema;

var UserSchema = new Schema({
  userId: {
    hashKey: true,
    type: String
  },
  creationTime : {
    rangeKey : true,
    type : Number
  },
  userName : {
    type : String
  },
  mobile : {
    type : String
  }
});

var exports = module.exports = {};

exports = dynamoose.model('Users', UserSchema);