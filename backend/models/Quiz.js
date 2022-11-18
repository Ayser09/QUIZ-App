const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema
//must be signed in this.stat.mustbesignedim
//questiom this.state.questions
//category: this.state.category

const QuizSchema = new Schema({
    mustBeSignedIn:{
        type:Boolean,
        default:false
    },
    question:[{
        type:Object,
        contains:{
            answers:{type:Array},
            correctAnswer:String,
            questionName:String
        }
    }],
    category:{
        type:String,
        required:true
    },
    deleted:{
        type:Boolean,
        default:false
    },
    scores:{
        tpye:Array,
        default:[]
    }
})
module.exports  = mongoose.model('Quizzes', QuizSchema)
