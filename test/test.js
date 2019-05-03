function run_sims(sim_type, done) {
    dev_test(sim_type);
    count_checks = 0;
    var check_end = setInterval( function() {
        count_checks++;
        if (sim_type == 1) {
            console.log('Ongoing dev_test(1) - time passed (mins):', count_checks*10/60);
        } else (sim_type == 2) {
            console.log('Ongoing dev_test(2) - time passed (mins):', count_checks*10/60);
        } else {
            console.log('Ongoing dev_test(3) - time passed (mins):', count_checks*10/60);
        }
        console.log('---');
        if ( blocknum > num_of_blocks ) {
            clearInterval(check_end);
            if (sim_type == 1) {
                console.log('Simulation 1 (standard) finished.');
                console.log('###');
                run_sims(sim_type+1,done);
            } else if (sim_type == 2) {
                console.log('Simulation 2 (enhanced) finished.');
                console.log('###');
                run_sims(sim_type+1,done);
            } else {
                console.log('Simulation 3 (no-target) finished.');
                console.log('###');
                expect( true ).toBe(true);
                done();
            }
        } else if ( count_checks*10/60 > 7 ) {
            clearInterval(check_end);
            console.log('Time passed:', count_checks*10/60);
            throw "Timeout - simulation incomplete.";
        }
    }, 1000*10 );
}
describe("suite", function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000*60*15; // wait altogether 15 mins max
    it("All tests passed.", function(done) {
        dev_test();
        run_sims(1, done);
    });
});
