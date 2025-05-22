const express= require("express");

const mongoose = require("mongoose") 

const { Router }= express;

const jwt = require('jsonwebtoken')

const {JWT_USER_SECRET}= require("../config")


const {authUSER} = require("../middleware/userMw");

const {CourseModel,PurchasesModel} = require("../db");

const coursesRouter= Router();

    coursesRouter.post("/purchase", authUSER, async function(req,res){
        const userId = req.userId;
        const courseId = req.body.courseId;

            
        await PurchasesModel.create({
            userId,
            courseId
        })

        res.json({
            message:"You have successfully bought the course"
        })
    })

    
    coursesRouter.get("/preview", async function(req,res){
        const courses = await CourseModel.find({});

        res.json({
            courses
        })
    
    });

module.exports={
    coursesRouter:coursesRouter
}