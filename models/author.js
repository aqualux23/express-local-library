// Imports mongoose
var mongoose = require('mongoose');
var moment = require('moment');

// Creates Schema object
var Schema = mongoose.Schema;

// Defines Schema & schematypes
var AuthorSchema = Schema(
{
	first_name: {type: String, required: true, max: 100},
	family_name: {type: String, required: true, max: 100},
	date_of_birth: {type: Date},
	date_of_death: {type: Date},
});
// Virtual for author's full name
AuthorSchema.virtual('name').get(function(){
	return this.family_name + ', ' + this.first_name;
});

// Virtual for author's URL
AuthorSchema.virtual('url').get(function(){
	return '/catalog/author' + this._id;
});

// Virtual for author's birthday, formatted
AuthorSchema.virtual('birth').get(function(){
	return this.date_of_birth ? moment(this.date_of_birth).format('YYYY-MM-DD') : '' ;
});

// Virtual for author's death, formatted
AuthorSchema.virtual('death').get(function(){
	return this.date_of_death ? moment(this.date_of_death).format('YYYY-MM-DD') : '' ;
});

// Exports model
module.exports = mongoose.model('Author', AuthorSchema);