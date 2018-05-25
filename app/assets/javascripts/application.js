/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
    
    
    
    
    
    $( "#progress-bar-1" ).animate({
        width: "100%"
    }, 1500, function() {
        document.getElementById("progressBar1").style.display = "none";
        document.getElementById("uploadDate1").style.display = "table-cell";
        document.getElementById("uploadTime1").style.display = "table-cell";
        document.getElementById("row1cancel").style.display = "none";
        document.getElementById("row1remove").style.display = "table-cell";

    });

    $( "#progress-bar-2" ).animate({
        width: "100%"
    }, 8000, function() {
        document.getElementById("progressBar2").style.display = "none";
        document.getElementById("uploadDate2").style.display = "table-cell";
        document.getElementById("uploadTime2").style.display = "table-cell";
        document.getElementById("row2cancel").style.display = "none";
        document.getElementById("row2remove").style.display = "table-cell";
    });

    $( "#progress-bar-3" ).animate({
        width: "100%",
    }, 4000, function() {
        document.getElementById("progressBar3").style.display = "none";
        document.getElementById("uploadDate3").style.display = "table-cell";
        document.getElementById("uploadTime3").style.display = "table-cell";
        document.getElementById("row3cancel").style.display = "none";
        document.getElementById("row3remove").style.display = "table-cell";
    });

    
    
    
    
    
    
    
    
    
    $('#offence_date_select_box').change(function() {
        if (this.value == "1" || this.value == "2" || this.value == "3" || this.value == "5" || this.value == "6") {            
            $('#offence_date').show();
            $('#offence_date_2').hide();
        } else if (this.value == "4") {
            $('#offence_date').hide();
            $('#offence_date_2').show();
        } else {
            $('#offence_date').hide();
            $('#offence_date_2').hide();
        }
    });






    
    
    
    
    
})



/* TABS PATTERN */
function tabGroup(tableObj, which) {

    tabA = 'TAB-ONE';
    tabB = 'TAB-TWO';
    tabC = 'TAB-THREE';

    if(which == tabA) {
        document.getElementById("tabA").className = "tab-on";
        document.getElementById("tabB").className = "tab";
        document.getElementById("tabC").className = "tab";
        document.getElementById("tabOneContent").style.display = "block";
        document.getElementById("tabTwoContent").style.display = "none";
        document.getElementById("tabThreeContent").style.display = "none";
    } else if(which == tabB) {
        document.getElementById("tabA").className = "tab";
        document.getElementById("tabB").className = "tab-on";
        document.getElementById("tabC").className = "tab";
        document.getElementById("tabOneContent").style.display = "none";
        document.getElementById("tabTwoContent").style.display = "block";
        document.getElementById("tabThreeContent").style.display = "none";
    } else if(which == tabC) {
        document.getElementById("tabA").className = "tab";
        document.getElementById("tabB").className = "tab";
        document.getElementById("tabC").className = "tab-on";
        document.getElementById("tabOneContent").style.display = "none";
        document.getElementById("tabTwoContent").style.display = "none";
        document.getElementById("tabThreeContent").style.display = "block";
    } 
}




/* UPLOAD FILE PATTERN */
/* Example 1 */
function showname () {
    var name = document.getElementById('fileInput');
    //alert('Selected file: ' + name.files.item(0).name);
    //alert('Selected file: ' + name.files.item(0).size);
    //alert('Selected file: ' + name.files.item(0).type);
    document.getElementById('fileName').innerHTML = name.files.item(0).name;
};
/* Example 2 */
function showname2 () {
    var name = document.getElementById('fileInput2');
    //alert('Selected file: ' + name.files.item(0).name);
    //alert('Selected file: ' + name.files.item(0).size);
    //alert('Selected file: ' + name.files.item(0).type);
    document.getElementById('fileName2').innerHTML = name.files.item(0).name;
};




/* CHARACTER COUNT */
$(document).ready(function() {
    var text_max = 5000; // This the maximum character count
    var text_spread = 100; // This calculates when to change the text colour to red
    
    $('#character_count').html('Character count: 0 /' + text_max);

    $('#textarea').keyup(function() {
        var text_length = $('#textarea').val().length;

        $('#character_count').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count').css('color','#B10E1E');
        } else {
            $('#character_count').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count').addClass('bold');
        } else {
            $('#character_count').removeClass('bold');
        }
    });
});