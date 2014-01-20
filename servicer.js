var mongoose = require('mongoose').Mongoose,
db = mongoose.connect('mongodb://localhost/db'),
Schema = mongoose.Schema;

mongoose.model('User', new Schema({
    properties: [
        'name',
        'age'
    ]
}));
