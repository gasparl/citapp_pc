
var stim_base, the_targets, the_probes;
function create_stim_base() {
    //creates a 6-item group - 1probe,1target,4irrelevants
    the_targets = [];
    the_probes = [];
    words_array = [
        $("#probe_id").val(),
        $("#targ_id").val(),
        $("#irr1_id").val(),
        $("#irr2_id").val(),
        $("#irr3_id").val(),
        $("#irr4_id").val()
    ];
    var stim_base_temp = [];
    words_array.forEach(function(word, num) {
        stim_base_temp.push({
            word: word,
            cat: "main_item"
        });
        if (0 === num) {
            stim_base_temp[num].type = "probe";
            the_probes.push(stim_base_temp[num].word);
        } else if (1 == num) {
            stim_base_temp[num].type = "target";
            the_targets.push(stim_base_temp[num].word);
        } else {
            stim_base_temp[num].type = "irrelevant" + (num - 1);
        }
    });
    stim_base = [
            stim_base_temp,
            stim_base_temp,
            stim_base_temp
    ];
    set_block_texts();
    set_cit_conditions();
}
function target_check() {
    if (
        $("#tcheck")
            .val()
            .toUpperCase() != the_targets[0].toUpperCase()
    ) {
        alert("Wrong! Please check the details more carefully!");
        $("#div_target_check").hide();
        $("#instructions").show();
        $("#tcheck").val('');
        return false;
    } else {
        $("#tcheck").val('');
        div_after_instr = "#div_cit_blockstart";
        return true;
    }
}
