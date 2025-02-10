const express = require('express')
const FrontController = require('../controllers/FrontController')
const route = express.Router()
const checkAuth = require('../middleware/auth')
const CourseController = require('../controllers/CourseController')
const ContactController = require('../controllers/ContactController')
const AdminController = require('../controllers/admin/AdminController')

// rounts
route.get('/home', checkAuth, FrontController.home)
route.get('/contact', checkAuth, FrontController.contact)
route.get('/about', checkAuth, FrontController.about)
route.get('/', FrontController.login)
route.get('/register', FrontController.register)

//insert data   
route.post('/userinsert', FrontController.userinsert)
route.post('/verifyLogin', FrontController.verifyLogin)
route.get('/logout', FrontController.logout)

//course
route.post('/course_insert', checkAuth, CourseController.createCourse)
route.get('/courseDisplay', checkAuth, CourseController.courseDisplay)

//display view edit button
route.get("/ViewCourse/:id", checkAuth, CourseController.ViewCourse);
route.get("/EditCourse/:id", checkAuth, CourseController.EditCourse);
route.get("/DeleteCourse/:id", checkAuth, CourseController.DeleteCourse);
route.post("/courseUpdate/:id", checkAuth, CourseController.courseUpdate);

// profile
route.get('/profile', checkAuth, FrontController.profile)
route.post('/changePassword',checkAuth,FrontController.changePassword)
route.post('/updateProfile',checkAuth, FrontController.updateProfile)


//contact
route.post("/createContact", checkAuth, ContactController.createContact);

//admincontroller
route.get("/admin/dashboard", checkAuth, AdminController.dashboard);
route.get('/admin/courseDisplay',checkAuth,AdminController.courseDisplay)
route.post('/admin/update_status/:id', checkAuth, AdminController.update_status)
route.get('/admin/ContactDisplay', checkAuth, AdminController.ContactDisplay)
route.get('/Viewadmin/:_id', checkAuth, AdminController.Viewadmin)
route.get('/Editadmin/:_id', checkAuth, AdminController.Editadmin)
route.get("/Deleteadmin/:_id", checkAuth, AdminController.Deleteadmin);
route.post("/Updateadmin/:_id", checkAuth, AdminController.Updateadmin);
//Admin profile update
// route.get('/admin/profile', checkAuth, AdminController.profile)
route.get("/admin/profile_update", checkAuth, AdminController.profile_update);
route.post("/admin/changePassword", checkAuth, AdminController.changePassword);
route.get("/admin/update_pass", checkAuth, AdminController.update_pass);
route.post("/admin/updateProfile", checkAuth, AdminController.updateProfile);
route.get("/admin/approvedUsers", checkAuth, AdminController.ApprovedUsers);
route.get("/admin/pendingUsers", checkAuth, AdminController.PendingUsers);
route.get("/admin/rejectedUsers", checkAuth, AdminController.RejectUsers);


//forgot password
route.post('/forgot_Password',FrontController.forgetPasswordVerify)
route.get('/reset-password',FrontController.reset_Password)
route.post('/reset_Password1',FrontController.reset_Password1)
route.get('/register/verify',FrontController.verifyMail)








module.exports = route