const express=require('express');
const userRouter=express.Router();
const {loginUser,logoutUser,getUser,myProfile, ContactUs,updateUser,addTimeline,addProjects,deleteTimeline,deleteProject}=require('../controller/userController');
const { isAuthenticated } = require('../middlewares/auth');
userRouter
.route('/login')
.post(loginUser)

userRouter
.route('/logout')
.post(logoutUser)

userRouter
.route('/user')
.get(getUser)

userRouter
.route('/me')
.get(isAuthenticated,myProfile)

userRouter
.route('/admin/update')
.patch(isAuthenticated,updateUser)

userRouter
.route('/admin/timeline/add')
.post(isAuthenticated,addTimeline)
userRouter
.route('/admin/project/add')
.post(isAuthenticated,addProjects)

userRouter
.route('/admin/timeline/:id')
.delete(isAuthenticated,deleteTimeline)
userRouter
.route('/admin/project/:id')
.post(isAuthenticated,deleteProject)

userRouter
.route('/contact')
.post(ContactUs)


module.exports=userRouter;