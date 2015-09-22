var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var CategorySchema = new Schema({
  name: String
},{collection:'project_category'});


//creating a model using schema
var project_category = mongoose.model('project_category', CategorySchema);

//exporting this model
module.exports = project_category;