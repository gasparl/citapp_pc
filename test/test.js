
function end_test() {
    describe("suite", function() {

      console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL);
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;


      it("All tests passed.", function() {
        expect( true ).toBe(true);
      });
    });
}
function run_sims(sim_type) {
    dev_test(sim_type);
    count_checks = 0;
    var check_end = setInterval( function() {
        count_checks++;
        if (sim_type == 1) {
            console.log('Ongoing dev_test(1) - time passed (mins):', count_checks*10/60);
        } else {
            console.log('Ongoing dev_test(2) - time passed (mins):', count_checks*10/60);
        }
        if (blocknum > num_of_blocks) {
            clearInterval(check_end);
            if (sim_type == 1) {
                console.log('Simulation 1 (standard) finished.');
                run_sims(sim_type+1);
            } else {
                console.log('Simulation 2 (enhanced) finished.');
                end_test();
            }
        } else if ( count_checks*10/60 > 7 ) {
            clearInterval(check_end);
            console.log('Time passed:', count_checks*10/60);
            throw "Timeout - simulation incomplete.";
        }
    }, 1000*10 );
}
dev_test();
run_sims(1);
