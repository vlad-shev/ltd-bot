const mongoose = require('mongoose');
const conn = require(__dirname+'/../server').conn;

const UserSchema = new mongoose.Schema({
	id : { type: Number, unique: true },
	// info: mongoose.Schema.Types.Mixed,
	// basket: mongoose.Schema.Types.Mixed
});

module.exports = conn.model('User', UserSchema); 
