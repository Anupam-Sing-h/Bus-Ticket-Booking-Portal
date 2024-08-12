const express = require('express');
const { home, usersignUp, usersignIn, addEvent } = require('../controller/user.auth');
const { busdetails, getbusinfo ,UpdateBus} = require('../controller/busdetail.auth');
const { adminsignUp,adminsignIn } = require('../controller/admin.auth');

const router = express.Router();

// Home route
router.route('/').get(home);

// Sign In route - Changed to POST
router.route('/signin').post(usersignIn);

// Sign Up route
router.route('/signup').post(usersignUp);

// Add Event route
router.route('/addevent').post(addEvent);

// Bus details route
router.route('/api/busdetail').post(busdetails);

// Get bus info route
router.route('/api/getbusinfo').get(getbusinfo);

//Admin

router.route('/adminsignup').post(adminsignUp);

router.route('/adminsignin').post(adminsignIn);

//updateing the seat availabilty

router.route('/update-bus/:bus_id').put (UpdateBus)

module.exports = router;
