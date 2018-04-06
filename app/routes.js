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
    
    req.session.data['addDatesToAvoidCount'] = "3"

    if (prosecutor == "TfL") {
        
        // *************
        //CASE DETAILS 1
        req.session.data['case-reference'] = "5160990"
        
        // Case details tab
        req.session.data['case-status'] = "No plea received"
        req.session.data['prosecutor'] = "TfL"
        req.session.data['notice-served'] = "4 March 2018"
        req.session.data['notice-served-short'] = "4 Mar 2018"
        req.session.data['plea-entry'] = "30 April 2018"
        req.session.data['plea-entry-short'] = "30 Apr 2018"

        // Personal details tab
        req.session.data['defendent-first-name'] = "Camilla"
        req.session.data['defendent-last-name'] = "JONES"
        req.session.data['defendent-dob'] = "4 January 1968"
        req.session.data['defendent-dob-short'] = "4 Jan 1968"
        req.session.data['defendent-age'] = "50"
        req.session.data['defendent-address-line-1'] = "307A Seven Sisters Rd"
        req.session.data['defendent-address-line-2'] = "Harringay"
        req.session.data['defendent-address-line-3'] = ""
        req.session.data['defendent-address-town-or-city'] = "London"
        req.session.data['defendent-address-postcode'] = "N4 1QR"
        req.session.data['defendent-email'] = "camilla.jones@hotmail.com"
        req.session.data['defendent-home-telephone'] = ""
        req.session.data['defendent-mobile'] = "08771539837"
        req.session.data['defendent-nin'] = "BN 65 12 45 D"

        //Offence details
        req.session.data['offence-title'] = "Passenger used ticket issued for another person"
        req.session.data['offence-description'] = "On 10/06/2014 At grosvenor place SW1 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not immediately on boarding pay the fare to the Driver for the journey you intended to take."
        req.session.data['statement-of-facts'] = "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied “I don’t have one as I am not really on this train, you’re seeing an illusion”. I had no choice but to issue him with a ticket."
        
        //res.redirect('/prosecutor/case-details-page')
        res.redirect('/prosecutor/dashboard')
        
    } else if (prosecutor == "TV Licensing") {
        
        // *************
        //CASE DETAILS 1
        req.session.data['case-reference'] = "5160990"
        
        // Case details tab
        req.session.data['case-status'] = "No plea received"
        req.session.data['prosecutor'] = "TV Licensing"
        req.session.data['notice-served'] = "4 March 2018"
        req.session.data['notice-served-short'] = "4 Mar 2018"
        req.session.data['plea-entry'] = "30 April 2018"
        req.session.data['plea-entry-short'] = "30 Apr 2018"
        
        // Personal details tab
        req.session.data['defendent-first-name'] = "Camilla"
        req.session.data['defendent-last-name'] = "JONES"
        req.session.data['defendent-dob'] = "4 January 1968"
        req.session.data['defendent-dob-short'] = "4 Jan 1968"
        req.session.data['defendent-age'] = "50"
        req.session.data['defendent-address-line-1'] = "307A Seven Sisters Rd"
        req.session.data['defendent-address-line-2'] = "Harringay"
        req.session.data['defendent-address-line-3'] = ""
        req.session.data['defendent-address-town-or-city'] = "London"
        req.session.data['defendent-address-postcode'] = "N4 1QR"
        req.session.data['defendent-email'] = "camilla.jones@hotmail.com"
        req.session.data['defendent-home-telephone'] = ""
        req.session.data['defendent-mobile'] = "08771539837"
        req.session.data['defendent-nin'] = "BN 65 12 45 D"

        //Offence details
        req.session.data['offence-title'] = "Possess/control TV set with intent another use install without a licence"
        req.session.data['offence-description'] = "On 01/11/2017 at Chelmsford in the county of Essex were in possession or control of a colour television receiver knowing, or having reasonable grounds for believing, that another person intended to install or use the receiver without a licence."
        req.session.data['statement-of-facts'] = "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied “I don’t have one as I am not really on this train, you’re seeing an illusion”. I had no choice but to issue him with a ticket."
                
        res.redirect('/prosecutor/dashboard')
        
    }
        
})

// *********
// Dashboard
router.post('/prosecutor/dashboard', function (req, res) {

    res.redirect('/prosecutor/search-for-a-case')
    
})
// *************************
// Defendant details updated
router.post('/prosecutor/defendant-details-updated', function (req, res) {

    res.redirect('/prosecutor/dashboard')
    
})
// ******************
// Add dates to avoid
router.post('/prosecutor/add-dates-to-avoid', function (req, res) {

    res.redirect('/prosecutor/dates-to-avoid')
    
})
// **************
// Dates to avoid
router.post('/prosecutor/dates-to-avoid', function (req, res) {

    res.redirect('/prosecutor/dates-to-avoid-confirmation')
    
})
// *****************************
// Dates to avoid - confirmation
router.post('/prosecutor/dates-to-avoid-confirmation', function (req, res) {

    req.session.data['addDatesToAvoidCount'] = "2"

    res.redirect('/prosecutor/case-details-page')
    
})







// *************************
// Upload files for new case
router.post('/prosecutor/upload-files-for-new-case', function (req, res) {

    res.redirect('/prosecutor/add-details-for-new-case')
    
})
// ************************
// Add details for new case
router.post('/prosecutor/add-details-for-new-case', function (req, res) {

    res.redirect('/prosecutor/check-new-case-details')
    
})
// **************************
// Check new new case details
router.post('/prosecutor/check-new-case-details', function (req, res) {

    res.redirect('/prosecutor/create-a-new-case-confirmation')
    
})
// ******************************
// Create a new case confirmation
router.post('/prosecutor/create-a-new-case-confirmation', function (req, res) {

    res.redirect('/prosecutor/upload-files-for-new-case')
    
})
