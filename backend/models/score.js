const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema

const ScoresSchema = new Schema({
    quizId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    answers:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        default:false
    },
    deleted:{
        type:Boolean,
        default:false
    }

})

module.exports = mongoose.model('Scores', ScoresSchema)
//routes will be made in quizzes api so call it there
