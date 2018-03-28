var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// *****
// Index
router.post('/', function (req, res) {

    var prosecutor = req.session.data['prosecutor-group']

    if (prosecutor == "TfL") {
        req.session.data['prosecutor'] = "TfL"
        req.session.data['offence-title'] = "Passenger used ticket issued for another person"
        req.session.data['offence-description'] = "On 10/06/2014 At grosvenor place SW1 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not immediately on boarding pay the fare to the Driver for the journey you intended to take."
        
        res.redirect('/prosecutor/dashboard')
        
    } else if (prosecutor == "TV Licensing") {
        req.session.data['prosecutor'] = "TV Licensing"
        req.session.data['offence-title'] = "Possess/control TV set with intent another use install without a licence"
        req.session.data['offence-description'] = "On 01/11/2017 at Chelmsford in the county of Essex were in possession or control of a colour television receiver knowing, or having reasonable grounds for believing, that another person intended to install or use the receiver without a licence."
        
        res.redirect('/prosecutor/dashboard')
        
    }
        
})

// *********
// Dashboard
router.post('/prosecutor/defendant-details-updated', function (req, res) {

    res.redirect('/prosecutor/dashboard')
    
})