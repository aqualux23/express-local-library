// Imports mongoose
var mongoose = require('mongoose');

// Creates schema object
var Schema = mongoose.Schema;

// Defines schema & schematypes
var GenreSchema = Schema({
	name: {type: String, required: true, min: 3, max: 100},
});

// Creates virtual for genre URL
GenreSchema.virtual('url').get(function(){
	return '/catalog/genre/' + this._id;
});

// Exports model
module.exports = mongoose.model('Genre', GenreSchema);
