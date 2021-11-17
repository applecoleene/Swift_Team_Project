//instance variables
let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    name: String,
    gender: String,
    program: String,
    study_meth: String,
    test_diff: String 
},
{
    collection: "answers"
});

module.exports = mongoose.model('Survey-Answer', surveyModel);