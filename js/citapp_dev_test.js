function dev_test(do_sim = 99) {
    var valid_test = true;
    // initiate task using demo data
    if ( do_sim == 1 ) { // set to standard version if selected
        $("#standard_id").prop("checked", true);
    }
    fill_up_demo();
    $('#div_intro_general').hide();
    no_select_bg();
    starter();
    var test_words = stim_base[0].map(a => a.word);
    // skip target check
    div_after_instr = "#div_cit_blockstart";
    blocknum = 4; // set temporarily to first MAIN block
    // generate Standard items
    getAllTestStimuli_simple();
    if ( teststim.length != 108 ) {
        valid_test = false;
        console.log("stims0.length not 108, but:", teststim.length);
    }
    var words_generated = teststim.map(a => a.word);
    words_generated = [...new Set(words_generated)];
    if (words_generated.sort().join(',') !== test_words.sort().join(',')) {
        valid_test = false;
        console.log("words_generated (standard) should contain:", test_words.sort().join(', '), "but it has:", words_generated.sort().join(', '));
    }
    // generate Enhanced items
    getAllTestStimuli_induced();
    if ( teststim.length != 161 ) {
        valid_test = false;
        console.log("stims0.length not 108, but:", teststim.length);
    }
    var words_generated = teststim.map(a => a.word);
    words_generated = [...new Set(words_generated)];
    test_words = test_words.concat(inducer_items);
    if (words_generated.sort().join(',') !== test_words.sort().join(',')) {
        valid_test = false;
        console.log("words_generated (enhanced) should contain:", test_words.sort().join(', '), "but it has:", words_generated.sort().join(', '));
    }
    if (valid_test !== true) {
        throw "Something is not right. Check console log.";
    } else {
        console.log('Finished item generation, no issues.');
    }


    blocknum = 1; // set back to first practice block
    nextblock(); // prepares running a test

    // finally, if so set, automatically start simulating human testing
    if ( do_sim == 1 || do_sim == 2 ) {
        apptest_probe_delay = 25;
        console.log('Simulation starts.');
        citapp_testing_on();
        sim_block_move();
    } else { // otherwise, show instructions
        $('#instructions').show();
    }
    return valid_test;
}
