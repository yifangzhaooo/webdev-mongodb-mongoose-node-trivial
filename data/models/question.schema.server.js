const mongoose = require('mongoose');
const MultipleChoiceSchema = require('./multiple-choice.schema.server');
const TrueFalseSchema = require('./true-false.schema.server');
module.exports = mongoose.Schema({
    _id: Number,
    question: String,
    points: Number,
    questionType: {type: String, enum: ['MULTIPLE_CHOICE', 'TRUE_FALSE']},
    multipleChoice: MultipleChoiceSchema,
    trueFalse: TrueFalseSchema
}, {collection: 'questions'});
