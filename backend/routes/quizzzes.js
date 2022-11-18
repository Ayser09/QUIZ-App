const express = require('express')
const Quizzes = require('../models/Quiz')
const router = require.Router()
const Score = require('../models/scores')
router.post('/create',checkAuth, (req,res)=>{
    const quiz = new Quizzes({
        ...req.body.quiz,

    })
    quiz.save().then(result =>{
        res.status(200).json({success:true})
    })
})
router.get('Allquizzes', checkAuth,(req, res)=>{
    Quizzes.find().then(result =>{
        res.status(200).json(result)
    })
})

router.post('/save-results', checkAuth,(req, res) =>{
    const score = new Score({
        userId:req.body.currentUser,
        answers:req.body.answers,
        quizId:req.body.quizId
    })
    score.save().then(async resp =>{
        await Quizzes.updateOne({ _id:req.body.quizId},{
            $push:{
                scores:resp._id
            }
        })
        res.status(200).json({scoreId:resp._id})
        })
})
//cal all the new api on the index page
module.exports = router
