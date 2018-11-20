var app_testing = false;
var apptest_correct_ratio_first = 1, apptest_correct_ratio = 0.9, apptest_simulated_rt_min = 350, apptest_simulated_rt_max = 600, apptest_move_to_next_block = true, apptest_probe_delay = 0;

function citapp_testing_on() {
    app_testing = true;
}
function keypress_sim() {
    console.log("Settings:", apptest_correct_ratio_first, apptest_correct_ratio, apptest_simulated_rt_min, apptest_simulated_rt_max, apptest_move_to_next_block, apptest_probe_delay);
    var info = trial_stim.type + " (" + trial_stim.word + ")";
    var rt_sim = randomdigit(apptest_simulated_rt_min, apptest_simulated_rt_max);
    if (trial_stim.type == "probe") {
        rt_sim += apptest_probe_delay;
    }
    simTimeout = setTimeout(function() {
        if (listen === true) {
            if (blocknum == 1) {
                correct_chance = apptest_correct_ratio_first;
            } else {
                correct_chance = apptest_correct_ratio;
            }
            if (correct_key == "e") {
                corr_code = "69";
                incor_code = "73";
            } else {
                corr_code = "73";
                incor_code = "69";
            }
            if (Math.random() < correct_chance) { // e.g. 95% correctly right key
                sim_key = corr_code;
            } else {
                sim_key = incor_code;
            }
            if (sim_key == "69") {
                chosen_response = "Response: E (LEFT)";
            } else {
                chosen_response = "Response: I (RIGHT)";
            }
            info += "\nTrial number: " + block_trialnum + ", number of trials left: "  + teststim.length + "\n";
            $(document).trigger($.Event("keydown", {
                keyCode: sim_key
            }));
            info += chosen_response + "\n";
            console.log(info);
            if (apptest_move_to_next_block == true && teststim.length < 2 && blocknum < num_of_blocks ) {
                simTimeout = setTimeout(function() {
                    runblock();
                    simTimeout = setTimeout(function() {
                        $(document).trigger($.Event("keyup", {
                            keyCode: "32"
                        }));
                    }, 3000);
                }, 4000);
            }
        }
    }, rt_sim);
}
function citapp_testing_off() {
    app_testing = false;
}
