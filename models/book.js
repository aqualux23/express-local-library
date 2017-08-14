// Imports mongoose
var mongoose = require('mongoose');

// Creates Schema object
var Schema = mongoose.Schema;

// Defines Schema & schematypes
var BookSchema = Schema({
	title: {type: String, required: true},
	author: {type: Schema.ObjectId, ref: 'Author', required: true},
	summary: {type: String, required: true},
	isbn: {type: String, required: true},
	genre: [{type: Schema.ObjectId, ref: 'Genre'}]
});

// Creates virtual for book's URL
BookSchema.virtual('url').get(function(){
	return '/catalog/book/' + this._id
});

// Exports module
module.exports = mongoose.model('Book', BookSchema);