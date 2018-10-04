
var true_details

var stim_base_6, stim_base, the_targets = [], the_probes = [], words_to_filter = [[], []];
function create_stim_base() {
    //creates a 6-item group - 1probe,1target,4irrelevants -
    words_array.forEach(function(word, num) {
        stim_base_temp[index].push({
            word: word,
            cat: categories[index]
        });
        if (0 === num) {
            stim_base_temp[index][num].type = "probe";
            the_probes.push(stim_base_temp[index][num].word);
        } else if (1 == num) {
            stim_base_temp[index][num].type = "target";
            the_targets.push(stim_base_temp[index][num].word);
        } else {
            stim_base_temp[index][num].type = "irrelevant" + (num - 1);
        }
    });
    if (cat_order == 1) {
        stim_base = [
            stim_base_temp[0],
            stim_base_temp[1]
        ];
    } else {
        stim_base = [
            stim_base_temp[1],
            stim_base_temp[0]
        ];
    }
    set_block_texts();
    set_cit_conditions();
}
function target_check() {
    if (
        $("#tcheck_forenames")
            .val()
            .toUpperCase() != the_targets[0].toUpperCase() ||
        $("#tcheck_surnames")
            .val()
            .toUpperCase() != the_targets[1].toUpperCase()
    ) {
        alert("Wrong! Please check the details more carefully!");
        $("#div_target_check").hide();
        $("#instructions").show();
        $("#tcheck").val('');
        return false;
    } else {
        div_after_instr = "#div_cit_blockstart";
        return true;
    }
}
