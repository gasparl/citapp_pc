var experiment_title = "CIT_Mobile_pc";
// set global cit vars
var tooslow_delay = 400;
var false_delay = 400;
var isi_delay_minmax = [300, 600];
var all_conditions = [0, 1, 2, 3, 4, 5]; // 0/3: RF-CIT, 1/4: ID-EAST CIT, 2/5: PRIMED-CIT (where 0,1,2 guilty 3,4,5 innocent)
var condition;
var subj_id;
var response_deadline, teststim, prac_teststim;
var response_deadline_main = 800;
var basic_times = {};
var num_of_blocks = 5; // including practice, starting at 1
var bg_color = "#031116";
var distance_order, dstnc_state, name_order;

$(document).ready(function() {
    basic_times.loaded = Date();
    basic_times.blocks = "";
    $("#div_intro_general").show(); //div_intro_general div_cit_main // div_items_test_probes //div_intro_consent div_outro_end
});
