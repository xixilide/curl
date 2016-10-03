var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: string

  }
)
module.exports = mongoose.model('post', PostSchema);
