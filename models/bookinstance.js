var moment = require('moment');
// Imports mongoose
var mongoose = require('mongoose');

// Creates schema object
var Schema = mongoose.Schema;

// Defines schema & schematypes
var BookInstanceSchema = Schema({
	book: {type: Schema.ObjectId, ref: 'Book', required: true},
	imprint: {type: String, required: true},
	status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
	due_back: {type: Date, default: Date.now},
});

// Creates virtual for bookinstance URL
BookInstanceSchema.virtual('url').get(function(){
	return '/catalog/bookinstance/' + this._id;
});

// Creates virtual for nicer formatting of due date
BookInstanceSchema.virtual('due_back_formatted').get(function(){
	return this.due_back ? moment(this.due_back).format('MMMM DD YYYY') : '';
}); // Not working properly; reason unknown

// Exports module
module.exports = mongoose.model('BookInstance', BookInstanceSchema);
