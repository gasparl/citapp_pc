var experiment_title;
// set global cit vars
var tooslow_delay = 400;
var false_delay = 400;
var isi_delay_minmax = [250, 750];
var all_conditions = [0, 1, 2, 3, 4, 5]; // 0/3: RF-CIT, 1/4: ID-EAST CIT, 2/5: PRIMED-CIT (where 0,1,2 guilty 3,4,5 innocent)
var condition;
var subj_id;
var response_deadline, teststim, prac_teststim;
var response_deadline_main = 800;
var basic_times = {};
var num_of_blocks; // including practice, starting at 1
var bg_color = "#031116";
var distance_order, dstnc_state, name_order;
var browser_name = $.browser.name;

$(document).ready(function() {
    chrome_check("Your browser was detected to be " + browser_name + "! This test was optimized for and should be run in Google Chrome. Please make sure you use the appropriate browser.");
    $("#div_intro_general").show(); //div_intro_general div_cit_main // div_intro_consent div_outro_end div_end_screen
});
function chrome_check(detected_text) {
    if (browser_name != "Chrome") {
        console.log("Detected browser: " + browser_name + ". This application should be run in Google Chrome.");
        alert(detected_text);
        $("#not_chrome_warn").html("<br><i><b>Warning!</b> The application was designed for Google Chrome, but your browser was detected to be " + browser_name + ".</i>");
        $("#not_chrome_warn").show();
    }
}
