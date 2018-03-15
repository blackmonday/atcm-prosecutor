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
