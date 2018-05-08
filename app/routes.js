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
    
    req.session.data['addDatesToAvoidCount'] = "2"
    req.session.data['defendantDetailsUpdated'] = "2"
    req.session.data['whichPage'] = "Not yet specified"

    if (prosecutor == "TfL") {
        
        // *************
        //CASE DETAILS 1
        req.session.data['case-reference'] = "5160990"
        
        // Case details tab
        req.session.data['case-status'] = "Not guilty"
        req.session.data['defendent-plea'] = "Not guilty"
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
        
        req.session.data['defendent-mitigation'] = "Fusce ultricies augue non felis iaculis vestibulum. Phasellus iaculis ut eros id semper. Praesent eget scelerisque leo, sit amet imperdiet dui. Morbi vestibulum condimentum pretium. Vivamus scelerisque auctor ex, at hendrerit erat dapibus eu."

        //Offence details
        req.session.data['offence-title'] = "Passenger used ticket issued for another person"
        req.session.data['offence-description'] = "On 10/06/2014 At grosvenor place SW1 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not immediately on boarding pay the fare to the Driver for the journey you intended to take."
        req.session.data['statement-of-facts'] = "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied “I don’t have one as I am not really on this train, you’re seeing an illusion”. I had no choice but to issue him with a ticket."
        
        req.session.data['new-case-offence-wording'] = "You have been charged with the following offence: That you, on 24 March 2018 at HIGH STREET, W3 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares, did use in relation to the journey you were taking a ticket which had been issued for use by another person on terms that it is not transferable. Contrary to Regulation 7(1)(b) of the Public Service Vehicles (conduct of Drivers, Inspectors, Conductors & Passengers) Regulations 1990 SI No. 1020 and contrary to Section 25(3) of the Public Passenger Vehicles Act 1981."
        
        // *************
        //CASE DETAILS 2
        req.session.data['case-reference-2'] = "9060951"
        
        // Case details tab
        req.session.data['case-status-2'] = "Not guilty"
        req.session.data['defendent-plea-2'] = "Not guilty"
        req.session.data['prosecutor-2'] = "TfL"
        req.session.data['notice-served-2'] = "28 February 2018"
        req.session.data['notice-served-short-2'] = "28 Feb 2018"
        req.session.data['plea-entry-2'] = "26 April 2018"
        req.session.data['plea-entry-short-2'] = "26 Apr 2018"

        // Personal details tab
        req.session.data['defendent-first-name-2'] = "Alex"
        req.session.data['defendent-last-name-2'] = "HAMMOND"
        req.session.data['defendent-dob-2'] = "17 August 1974"
        req.session.data['defendent-dob-short-2'] = "17 Aug 1974"
        req.session.data['defendent-age-2'] = "44"
        req.session.data['defendent-address-line-1-2'] = "46 Milton Grove"
        req.session.data['defendent-address-line-2-2'] = "Stoke Newington"
        req.session.data['defendent-address-line-3-2'] = ""
        req.session.data['defendent-address-town-or-city-2'] = "London"
        req.session.data['defendent-address-postcode-2'] = "N16 8QY"
        req.session.data['defendent-email-2'] = "jones-alex@gmail.com"
        req.session.data['defendent-home-telephone-2'] = ""
        req.session.data['defendent-mobile-2'] = "07766280294"
        req.session.data['defendent-nin-2'] = "AJ 54 36 22 B"

        req.session.data['defendent-mitigation-2'] = "Fusce ultricies augue non felis iaculis vestibulum. Phasellus iaculis ut eros id semper. Praesent eget scelerisque leo, sit amet imperdiet dui. Morbi vestibulum condimentum pretium. Vivamus scelerisque auctor ex, at hendrerit erat dapibus eu."

        //Offence details
        req.session.data['offence-title-2'] = "Passenger used ticket issued for another person"
        req.session.data['offence-description-2'] = "On 10/06/2014 At grosvenor place SW1 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not immediately on boarding pay the fare to the Driver for the journey you intended to take."
        req.session.data['statement-of-facts-2'] = "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied “I don’t have one as I am not really on this train, you’re seeing an illusion”. I had no choice but to issue him with a ticket."
        
        req.session.data['new-case-offence-wording-2'] = "You have been charged with the following offence: That you, on 24 March 2018 at HIGH STREET, W3 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares, did use in relation to the journey you were taking a ticket which had been issued for use by another person on terms that it is not transferable. Contrary to Regulation 7(1)(b) of the Public Service Vehicles (conduct of Drivers, Inspectors, Conductors & Passengers) Regulations 1990 SI No. 1020 and contrary to Section 25(3) of the Public Passenger Vehicles Act 1981."
        
        //res.redirect('/prosecutor/case-details-page')
        res.redirect('/prosecutor/dashboard')
        
    } else if (prosecutor == "TV Licensing") {
        
        // *************
        //CASE DETAILS 1
        req.session.data['case-reference'] = "5160990"
        
        // Case details tab
        req.session.data['case-status'] = "Guilty plea"
        req.session.data['defendent-plea'] = "Not guilty"
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

        req.session.data['defendent-mitigation'] = "Fusce ultricies augue non felis iaculis vestibulum. Phasellus iaculis ut eros id semper. Praesent eget scelerisque leo, sit amet imperdiet dui. Morbi vestibulum condimentum pretium. Vivamus scelerisque auctor ex, at hendrerit erat dapibus eu."

        //Offence details
        req.session.data['offence-title'] = "Possess/control TV set with intent another use install without a licence"
        req.session.data['offence-description'] = "On 01/11/2017 at Chelmsford in the county of Essex were in possession or control of a colour television receiver knowing, or having reasonable grounds for believing, that another person intended to install or use the receiver without a licence."
        req.session.data['statement-of-facts'] = "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied “I don’t have one as I am not really on this train, you’re seeing an illusion”. I had no choice but to issue him with a ticket."

        req.session.data['new-case-offence-wording'] = "Lorem ipsum dolor sit amet."
        
        // *************
        //CASE DETAILS 2
        req.session.data['case-reference-2'] = "9060951"
        
        // Case details tab
        req.session.data['case-status-2'] = "Not guilty"
        req.session.data['defendent-plea-2'] = "Not guilty"
        req.session.data['defendent-plea-2'] = "Not guilty"
        req.session.data['prosecutor-2'] = "TV Licensing"
        req.session.data['notice-served-2'] = "28 February 2018"
        req.session.data['notice-served-short-2'] = "28 Feb 2018"
        req.session.data['plea-entry-2'] = "26 April 2018"
        req.session.data['plea-entry-short-2'] = "26 Apr 2018"

        // Personal details tab
        req.session.data['defendent-first-name-2'] = "Alex"
        req.session.data['defendent-last-name-2'] = "HAMMOND"
        req.session.data['defendent-dob-2'] = "17 August 1974"
        req.session.data['defendent-dob-short-2'] = "17 Aug 1974"
        req.session.data['defendent-age-2'] = "44"
        req.session.data['defendent-address-line-1-2'] = "46 Milton Grove"
        req.session.data['defendent-address-line-2-2'] = "Stoke Newington"
        req.session.data['defendent-address-line-3-2'] = ""
        req.session.data['defendent-address-town-or-city-2'] = "London"
        req.session.data['defendent-address-postcode-2'] = "N16 8QY"
        req.session.data['defendent-email-2'] = "jones-alex@gmail.com"
        req.session.data['defendent-home-telephone-2'] = ""
        req.session.data['defendent-mobile-2'] = "07766280294"
        req.session.data['defendent-nin-2'] = "AJ 54 36 22 B"

        req.session.data['defendent-mitigation-2'] = "Fusce ultricies augue non felis iaculis vestibulum. Phasellus iaculis ut eros id semper. Praesent eget scelerisque leo, sit amet imperdiet dui. Morbi vestibulum condimentum pretium. Vivamus scelerisque auctor ex, at hendrerit erat dapibus eu."

        //Offence details
        req.session.data['offence-title-2'] = "Possess/control TV set with intent another use install without a licence"
        req.session.data['offence-description-2'] = "On 01/11/2017 at Chelmsford in the county of Essex were in possession or control of a colour television receiver knowing, or having reasonable grounds for believing, that another person intended to install or use the receiver without a licence."
        req.session.data['statement-of-facts-2'] = "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied “I don’t have one as I am not really on this train, you’re seeing an illusion”. I had no choice but to issue him with a ticket."
        
        res.redirect('/prosecutor/dashboard')
                
    } else if (prosecutor == "DVLA") {
        
        // *************
        //CASE DETAILS 1
        req.session.data['case-reference'] = "5160990"

        // Case details tab
        req.session.data['case-status'] = "Guilty plea"
        req.session.data['defendent-plea'] = "Not guilty"
        req.session.data['prosecutor'] = "DVLA"
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

        req.session.data['defendent-mitigation'] = "Fusce ultricies augue non felis iaculis vestibulum. Phasellus iaculis ut eros id semper. Praesent eget scelerisque leo, sit amet imperdiet dui. Morbi vestibulum condimentum pretium. Vivamus scelerisque auctor ex, at hendrerit erat dapibus eu."

        //Offence details
        req.session.data['offence-title'] = "Keep a vehicle without a vehicle license"
        req.session.data['offence-description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuR."
        req.session.data['statement-of-facts'] = "Eiusmod tempor orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

        req.session.data['new-case-offence-wording'] = "Lorem ipsum dolor sit amet."
        
        // *************
        //CASE DETAILS 2
        req.session.data['case-reference-2'] = "9060951"
        
        // Case details tab
        req.session.data['case-status-2'] = "Not guilty"
        req.session.data['defendent-plea-2'] = "Not guilty"
        req.session.data['prosecutor-2'] = "DVLA"
        req.session.data['notice-served-2'] = "28 February 2018"
        req.session.data['notice-served-short-2'] = "28 Feb 2018"
        req.session.data['plea-entry-2'] = "26 April 2018"
        req.session.data['plea-entry-short-2'] = "26 Apr 2018"

        // Personal details tab
        req.session.data['defendent-first-name-2'] = "Alex"
        req.session.data['defendent-last-name-2'] = "HAMMOND"
        req.session.data['defendent-dob-2'] = "17 August 1974"
        req.session.data['defendent-dob-short-2'] = "17 Aug 1974"
        req.session.data['defendent-age-2'] = "44"
        req.session.data['defendent-address-line-1-2'] = "46 Milton Grove"
        req.session.data['defendent-address-line-2-2'] = "Stoke Newington"
        req.session.data['defendent-address-line-3-2'] = ""
        req.session.data['defendent-address-town-or-city-2'] = "London"
        req.session.data['defendent-address-postcode-2'] = "N16 8QY"
        req.session.data['defendent-email-2'] = "jones-alex@gmail.com"
        req.session.data['defendent-home-telephone-2'] = ""
        req.session.data['defendent-mobile-2'] = "07766280294"
        req.session.data['defendent-nin-2'] = "AJ 54 36 22 B"

        req.session.data['defendent-mitigation-2'] = "Fusce ultricies augue non felis iaculis vestibulum. Phasellus iaculis ut eros id semper. Praesent eget scelerisque leo, sit amet imperdiet dui. Morbi vestibulum condimentum pretium. Vivamus scelerisque auctor ex, at hendrerit erat dapibus eu."

        //Offence details
        req.session.data['offence-title-2'] = "Keep a vehicle without a vehicle license"
        req.session.data['offence-description-2'] = "On 01/11/2017 at Chelmsford in the county of Essex were in possession or control of a colour television receiver knowing, or having reasonable grounds for believing, that another person intended to install or use the receiver without a licence."
        req.session.data['statement-of-facts-2'] = "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied “I don’t have one as I am not really on this train, you’re seeing an illusion”. I had no choice but to issue him with a ticket."
        
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
router.post('/prosecutor/defendant-details-updated-3', function (req, res) {
    
    req.session.data['defendantDetailsUpdated'] = "0"

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

// **************
// Dates to avoid 2
router.post('/prosecutor/dates-to-avoid-2', function (req, res) {

    res.redirect('/prosecutor/dates-to-avoid-confirmation-2')
    
})

// *****************************
// Dates to avoid - confirmation
router.post('/prosecutor/dates-to-avoid-confirmation', function (req, res) {

    req.session.data['addDatesToAvoidCount'] = req.session.data['addDatesToAvoidCount']-1

    res.redirect('/prosecutor/add-dates-to-avoid')
    
})

// *****************************
// Dates to avoid - confirmation 2
router.post('/prosecutor/dates-to-avoid-confirmation-2', function (req, res) {

    req.session.data['addDatesToAvoidCount'] = req.session.data['addDatesToAvoidCount']-1

    //res.redirect('/prosecutor/case-details-page')
    res.redirect('/prosecutor/add-dates-to-avoid')
    
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

// ******************************
// Withdaw an offence
router.post('/prosecutor/withdraw-an-offence', function (req, res) {

    req.session.data['hasCaseBeenWithdrawn'] = "True"
    
    res.redirect('/prosecutor/case-details-page')
    
})

// ******************************
// Withdaw an offence
router.post('/prosecutor/defendants-online-plea', function (req, res) {
    
    res.redirect('/prosecutor/case-details-page')
    
})
