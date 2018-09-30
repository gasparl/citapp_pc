////////////////CIT

// texts to display before blocks

var block_texts = [];
var first_categ;
var all_main_rts = { "probs": [], "irrs": [] };
function set_block_texts() {
    var change_hint;
    if (distance_order == 'wide1st') {
        change_hint = '<br><br>However, you will now have to press different response keys....';
    } else {
        change_hint = '<br><br>>However, you will now have to press different response keys....';
    }
    if (condition == 2 || condition == 5) {
        target_reminder = ["", "", "", ""];
    } else {
        target_reminder = [
            "Remember: in this category, your target that requires a different response is <b>" +
                stim_base[0][1].word.toUpperCase() +
                "</b>. ",
            "Remember: in this category, your target that requires a different response is <b>" +
                stim_base[1][1].word.toUpperCase() +
                "</b>. "
        ];
    }
    block_texts[0] = "";
    block_texts[1] =
        'There will be three short practice rounds. In this first practice round, we just want to see that you clearly understand the task. Therefore, you will have a lot of time to choose each of your responses, just make sure you choose accurately. Here, all items from the two categories (forenames, surnames) will be mixed together randomly. <b>You must respond to each item correctly.</b> If you choose an incorrect response (or not give response for over 10 seconds), you will have to repeat this practice round.<br><br>Remember: press "<b>E</b>" or "<b>I</b>" keys depending on the category to which the given item belongs. If needed, click <b>show full instructions again</b> to reread the details.<br><br><p id="chances_id"></p><b>Please make sure you clearly understand the instructions before continuing with the task!</b>';
    block_texts[2] =
        '<span id="feedback_id2">Great, you passed the first practice round. In this second practice round, there will be a shorter deadline for the responses, but a certain rate of errors is allowed. (Items will be first forename names, then surname names, then again forenames, etc.) Try to be as accurate and as fast as possible.<br><br></span><p id="chances_id"></p>';
    block_texts[3] =
        "<span id='feedback_id3'>You passed the second practice round. This will be the third and last practice round. The response deadline is again shorter.<br><br>The task is designed to be difficult, so don't be surprised if you make mistakes, but do your best: <b>try to be as accurate and as fast as possible</b>.<br></span><p id='chances_id'></p>";
    block_texts[4] =
        "Good job. Now begins the actual test. The task is the same. There will be two blocks, with a pause in-between. This first block tests the category of " +
        stim_base[0][0].cat +
        ", so you will be shown only the related items. " +
        target_reminder[0] +
        '<br><br><b>Again: try to be as accurate and as fast as possible.</b>';
    block_texts[5] =
        "The first block is now done. The second block will test the category of " +
        stim_base[1][0].cat +
        ". " +
        target_reminder[1] +
        "The task is otherwise the same. <b>Again: try to be as accurate and as fast as possible.</b>";
}

function first_practice_stim() {
    practice_stim();
    if (condition != 0 && condition != 3) {
        prac_teststim = prac_teststim.concat(inducersGen());
    }
    basestims = shuffle(prac_teststim);
    teststim = [];
    var stim_words = [];
    for (var i = 0; i < 2; i++) {
        var stim_types = [];
        basestims.forEach(function(stim_dict) {
            if (
                (stim_types.indexOf(stim_dict.type) == -1 ||
                    stim_dict.cat == "inducer") &&
                stim_words.indexOf(stim_dict.word) == -1
            ) {
                stim_types.push(stim_dict.type);
                stim_words.push(stim_dict.word);
                teststim.push(stim_dict);
            }
        });
    }
}

function getPracticeTestStimuli_simple() {
    //18 prac_teststim from all 4 categories (6+6+6)
    prac_teststim = [];
    stim_base.slice(0, 2).forEach(function(groupOf6) {
        var blocksOf108 = randomDegradePlus(groupOf6);
        prac_teststim.push.apply(prac_teststim, blocksOf108.slice(0, 6));
    });
}
function getAllTestStimuli_simple() {
    //same as above, but for the full test: 3x36=108 stimuli from each of the 3 categories
    teststim = randomDegradePlus(stim_base[blocknum - 4]);
}
function getPracticeTestStimuli_induced() {
    //27 degraded prac_teststim from all 3 categories (9+9+9)
    prac_teststim = [];
    stim_base.slice(0, 2).forEach(function(groupOf6) {
        var blocksOf162 = inducersAdded(groupOf6);
        prac_teststim.push.apply(prac_teststim, blocksOf162.slice(0, 9));
    });
}
function getAllTestStimuli_induced() {
    //same as above, but one block of the full test: 162 stimuli from each of the 3 categories
    teststim = inducersAdded(stim_base[blocknum - 4]);
}
function inducersAdded(groupOf6) {
    var stim_162_base = randomDegradePlus(groupOf6);
    var inducers = inducersGen();
    var inducerIndex;
    the9fills = ["%0", "%1", "%2", "#0", "#1", "#2", "*0", "*1", "*2"];
    for (var indx = 0; indx < stim_162_base.length; indx++) {
        if (stim_162_base[indx].blur == "yes") {
            inducerIndex = the9fills.indexOf(stim_162_base[indx].filler);
            stim_162_base.splice(indx, 0, inducers[inducerIndex]);
            indx++;
        }
    }
    stim_162 = stim_162_base;
    return stim_162;
}
function inducersGen() {
    inducer_items = [
        "FAMILIAR",
        "RECOGNIZED",
        "MINE",
        "UNFAMILIAR",
        "UNKNOWN",
        "OTHER",
        "THEIRS",
        "THEM",
        "FOREIGN"
    ];
    inducers_base = [];
    inducer_items.forEach(function(word, ind) {
        inducers_base.push({
            word: word,
            cat: "inducer"
        });
        if (ind < 3) {
            inducers_base[ind].type = "selfrefitem";
        } else {
            inducers_base[ind].type = "otherrefitem";
        }
    });
    return inducers_base;
}
function randomDegradePlus(arrayOf6dicts) {
    // using blur-noblur attributes, assigns (to blurs) a number from 1-3 for each filler type (* or # or %) in a balanced manner
    var tempCopy6 = $.extend(true, [], arrayOf6dicts);
    var the6words = [];
    tempCopy6.forEach(function(item) {
        the6words.push(item.word);
    });
    var stim_108 = [];
    stim_108.push.apply(stim_108, randomDegrade(arrayOf6dicts));
    stim_108.push.apply(stim_108, randomDegrade(arrayOf6dicts));
    stim_108.push.apply(stim_108, randomDegrade(arrayOf6dicts));
    possible6orders = [
        [0, 1, 2],
        [0, 2, 1],
        [1, 0, 2],
        [1, 2, 0],
        [2, 0, 1],
        [2, 1, 0]
    ];
    orders = {};
    orders["%"] = shuffle($.extend(true, [], possible6orders));
    orders["#"] = shuffle($.extend(true, [], possible6orders));
    orders["*"] = shuffle($.extend(true, [], possible6orders));
    stim_108.forEach(function(item, index) {
        if (item.blur == "yes") {
            var currentFiller = item.filler;
            var wordIndex = the6words.indexOf(item.word);
            stim_108[index].filler =
                currentFiller + orders[currentFiller][wordIndex].splice(0, 1);
        }
    });
    return stim_108;
}

// these below are declared globally so that next 36 stim generation will also not start with same as last
var lastOf6filler = "none";
var lastOf6word = "none";
function randomDegrade(arrayOf6dicts) {
    // takes an array of six dictionary items, returns 36 items randomized in groups of 6, with randomly varying blur/filler attributes
    var stims_cat_base = shuffle(arrayOf6dicts);
    var stimuli_base36 = $.extend(
        true,
        [],
        [
            stims_cat_base,
            stims_cat_base,
            stims_cat_base,
            stims_cat_base,
            stims_cat_base,
            stims_cat_base
        ]
    ); // 6x6=36 dict items
    var blurChoice = shuffle([0, 1, 2, 3, 4, 5]);
    var blurFirst = blurChoice.slice(0, 3); //position of items to be blurred in the first group of 6; then alternates (blur-noblur-blur-etc)
    var blurSecond = blurChoice.slice(3, 6); //position of items NOT to be blurred in the first group of 6; then alternates (noblur-blur-noblur-etc)
    var fillerChoice1 = shuffle([
        //randomizes the orders of the three possible fillers
        ["*", "#", "%"],
        ["%", "*", "#"],
        ["#", "%", "*"]
    ]);
    var fillerChoice2 = shuffle([
        //same again
        ["*", "#", "%"],
        ["%", "*", "#"],
        ["#", "%", "*"]
    ]);
    stimuli_base36.forEach(function(item6group, index6group) {
        // assigns the random blur and filler choices for each dict item within each group
        blurFirst.forEach(function(itemNum1, index1) {
            if (index6group % 2 == 0) {
                item6group[itemNum1].blur = "yes";
                item6group[itemNum1].filler =
                    fillerChoice1[index6group / 2][index1];
            } else {
                item6group[itemNum1].blur = "no";
                item6group[itemNum1].filler =
                    fillerChoice2[(index6group - 1) / 2][index1];
            }
        });
        blurSecond.forEach(function(itemNum2, index2) {
            if (index6group % 2 == 1) {
                item6group[itemNum2].blur = "yes";
                item6group[itemNum2].filler =
                    fillerChoice1[(index6group - 1) / 2][index2];
            } else {
                item6group[itemNum2].blur = "no";
                item6group[itemNum2].filler =
                    fillerChoice2[index6group / 2][index2];
            }
        });
    });
    var stimuli_36 = [];
    var temp6, fail;
    stimuli_base36.forEach(function(groupOf6, indexOf6) {
        //randomizes each 6-item group with restrictions regarding the sequence of the attributes (blur, filler) assigned above
        var available = [0];
        var safecount = 0;
        while (safecount < 299) {
            safecount++;
            var groupOf6_rand = groupOf6;
            if (condition == 2 || condition == 5) {
                // !! skip targets if targetless induced version
                groupOf6_rand.forEach(function(item_dic_rand, indx_rand6) {
                    if (item_dic_rand.type == "target") {
                        groupOf6_rand.splice(indx_rand6, 1);
                    }
                });
            }
            groupOf6_rand = shuffle(groupOf6_rand);
            temp6 = [groupOf6_rand[0]];
            fail = 0;
            var leng = groupOf6_rand.length; // actually 5 if there is no target
            for (var i = 1; i < leng; i++) {
                var newDictItem = groupOf6_rand[i];
                var skip = [];
                for (placeIndex = 0; placeIndex < temp6.length; placeIndex++) {
                    placeHolder = temp6[placeIndex];
                    if (placeHolder.filler == newDictItem.filler) {
                        //two of the same fillers never follow each other
                        skip.push.apply(skip, [placeIndex, placeIndex + 1]);
                    }
                    if (
                        placeIndex > 0 &&
                        temp6[placeIndex - 1].blur == placeHolder.blur &&
                        placeHolder.blur == newDictItem.blur
                    ) {
                        //max two blurred items beside each other
                        skip.push.apply(skip, [
                            placeIndex,
                            placeIndex - 1,
                            placeIndex + 1
                        ]);
                    }
                    var slots = range(0, temp6.length + 1);
                    available = slots.filter(function(valuee) {
                        return skip.indexOf(valuee) === -1;
                    });
                }
                if (available.length == 0) {
                    fail = 1;
                    break;
                }
                destination = rchoice(available);
                temp6.splice(destination, 0, newDictItem);
            }
            if (
                temp6[0].filler == lastOf6filler ||
                temp6[0].word == lastOf6word
            ) {
                //the word and filler type of the last item of the previous 6 group cannot be the same as the first of the next one
                fail = 1;
            }
            if (fail == 0) {
                stimuli_36[indexOf6] = $.extend(true, [], temp6);
                lastOf6filler = temp6[temp6.length - 1].filler; //store last item's filler type
                lastOf6word = temp6[temp6.length - 1].word; //store last item's word
                break;
            }
        }
    });
    var stim_36 = $.map(stimuli_36, function(n) {
        return n;
    });
    return stim_36;
}

// the task

var teststim,
    tooslow,
    incorrect,
    block_trialnum,
    rt_data_dict,
    trial_stim,
    keys_code,
    can_start;
var practice_repeated = {
    block1: 0,
    block2: 0,
    block3: 0
};
var cit_data = "subject_id\tcondition\tcateg_order\tblock_number\ttrial_number\tstimulus_shown\tcategory\tstim_type\tresponse_key\trt_start\trt_end\tincorrect\ttoo_slow\tisi\tdate_in_ms\n";
var correct_key = "none";
var blocknum = 1;
var rt_start = 99999;
var rt_end = 99999;
var start = 0;
listen = false;
listn_end = false;

// too slow
function flash_too_slow() {
    $("#tooslow").show();
    setTimeout(function() {
        $("#tooslow").hide();
        tooslow = 1;
        keys_code = "x";
        first_prac_wrong();
        post_resp_hold();
    }, tooslow_delay);
}

// false
function flash_false() {
    $("#false").show();
    setTimeout(function() {
        $("#false").hide();
        incorrect = 1;
        first_prac_wrong();
        post_resp_hold();
    }, false_delay);
}

// if there is a sole mistake in the first practice block, the block is repeated
var first_correct = true;
function first_prac_wrong() {
    if (blocknum == 1) {
        teststim = [];
        alert(
            "You did not respond correctly. You will start this practice once again. Please read the instructions carefully."
        );
        first_correct = false;
    }
}

var practice_stim, main_stim, div_after_instr;

function set_cit_conditions() {
    var inducers_instructions =
        '<br><br>As continual reminders, there will also appear words that belong to one of the two categories (FAMILIAR or UNFAMILIAR). <br>Words belonging to the FAMILIAR category need the answer FAMILIAR ("I" key). These words are: <b>FAMILIAR</b>, <b>RECOGNIZED</b>, <b>MINE</b><br>Words belonging to the UNFAMILIAR category need the answer UNFAMILIAR ("E" key). These words are: <b>UNFAMILIAR</b>, <b>UNKNOWN</b>, <b>OTHER</b>, <b>THEIRS</b>, <b>THEM</b>, <b>FOREIGN</b></br></br>';
    if (condition == 0 || condition == 3) {
        // standard CIT
        div_after_instr = "#div_target_check";
        $("#task_instruction").html(
            'Pressing the "I" key means "YES, I recognize this item as a relevant". Pressing the "E" key means "NO, I do not recognize this item as relevant". <br> You will see words (forenames, surnames) appearing in the middle of the screen. You have to recognize and say YES to the following target details: <b>' +
                the_targets.join("</b>, <b>").toUpperCase() +
                "</b><br>You have to say NO to all other details. Remember: you are denying that you recognize any of the other details as relevant to you, so you have to say NO to all of them.<br><br>"
        );
        $("#label_top").html("recognize?");
        $("#label_right").html('yes = "I"');
        $("#label_left").html('no = "E"');
        practice_stim = getPracticeTestStimuli_simple;
        main_stim = getAllTestStimuli_simple;
    } else if (condition == 1 || condition == 4) {
        // induced & target
        div_after_instr = "#div_target_check";
        $("#task_instruction").html(
            'Pressing the "I" key means that the displayed item is "FAMILIAR" to you. Pressing the "E" key means that the item is "UNFAMILIAR" to you. You will see words (forenames, surnames) appearing in the middle of the screen. You have to say FAMILIAR to the following target details: <b>' +
                the_targets.join("</b>, <b>").toUpperCase() +
                "</b><br>You have to say UNFAMILIAR to all other actual details (other forenames, surnames). Remember: you are denying that you recognize any of these other details as relevant to you, so you have to say UNFAMILIAR to all of them. " +
                inducers_instructions
        );
        $("#label_top").html("familiar to you?");
        $("#label_right").html('familiar = "I"');
        $("#label_left").html('unfamiliar = "E"');
        practice_stim = getPracticeTestStimuli_induced;
        main_stim = getAllTestStimuli_induced;
    } else if (condition == 2 || condition == 5) {
        // induced - nontarget
        div_after_instr = "#div_cit_blockstart";
        $("#task_instruction").html(
            'Pressing the "I" key means that the displayed item is "FAMILIAR" to you. Pressing the "E" key means that the item is "UNFAMILIAR" to you. You will see words (forenames, surnames) appearing in the middle of the screen. You have to say UNFAMILIAR to all these details. Remember: you are denying that you recognize any of these details as relevant to you, so you have to say UNFAMILIAR to all of them. ' +
                inducers_instructions
        );
        $("#label_top").html("familiar to you?");
        $("#label_right").html('familiar = "I"');
        $("#label_left").html('unfamiliar = "E"');
        practice_stim = getPracticeTestStimuli_induced;
        main_stim = getAllTestStimuli_induced;
    }
}

function item_display() {
    if (trial_stim.type == "target" || trial_stim.type == "selfrefitem") {
        correct_key = "i";
    } else {
        correct_key = "e";
    }
    requestAnimationFrame(function() {
        $("#stimulus").text(text_to_show);
        start = now();
        listen = true;
        response_window = setTimeout(function() {
            rt_start = now() - start;
            listen = false;
            flash_too_slow();
        }, response_deadline);
    });
}
// isi
var isi_delay;
function isi() {
    isi_delay = randomdigit(1, isi_delay_minmax[1] - isi_delay_minmax[0]);
    setTimeout(function() {
        item_display();
    }, isi_delay);
}
function post_resp_hold() {
    $("#stimulus").text("");
    setTimeout(function() {
    listn_end = false;
    add_response();
  }, isi_delay_minmax[0]);
}

it_type_feed_dict = {
    selfrefitem: "familiarity-related items",
    otherrefitem: "unfamiliarity-related items",
    main_item: "actual details (forenames or surnames)",
    target: "target items"
};
//evaluate practice performance plus give feedback
function practice_eval() {
    //at least 60% on each item. if not, warn accordingly
    var is_valid = true;
    var types_failed = [];
    if (blocknum == 1) {
        is_valid = first_correct;
        first_correct = true;
    } else {
        for (var it_type in rt_data_dict) {
            var rts_correct = $.grep(rt_data_dict[it_type], function(rt_item) {
                return rt_item > 150;
            });
            corr_ratio = rts_correct.length / rt_data_dict[it_type].length;
            if (corr_ratio < 0.6) {
                is_valid = false;
                types_failed.push(
                    " " +
                        it_type_feed_dict[it_type] +
                        " (" +
                        Math.floor(corr_ratio * 10000) / 100 +
                        "% correct)"
                );
            }
        }
    }
    if (is_valid == false) {
        var feedback_text =
            "You will have to repeat this practice round, because of too few correct responses.<br><br>You need at least 60% accuracy on each item type, but you did not have enough correct responses for the following one(s):" +
            types_failed.join(",") +
            ".<br><br>Try to make responses both accurately and in time.<br><br>";
        $("#feedback_id" + blocknum).html(feedback_text);
    }
    return is_valid;
}
//evaluate main block performance
function main_eval() {
    //at least 50% on each item. if not, warn accordingly. kickout below 40%
    var verylow = false;
    var types_failed = [];
    for (var it_type in rt_data_dict) {
        var rts_correct = $.grep(rt_data_dict[it_type], function(rt_item) {
            return rt_item > 150;
        });
        corr_ratio = rts_correct.length / rt_data_dict[it_type].length;
        if (corr_ratio < 0.5) {
            verylow = true;
            types_failed.push(
                " " +
                    it_type_feed_dict[it_type] +
                    " (" +
                    Math.floor(corr_ratio * 10000) / 100 +
                    "% correct)"
            );
        }
    }
    if (verylow == true && blocknum > 3) {
        var feedback_text =
            "Warning: you had very low accuracy in this last block to the following item type(s):" +
            types_failed.join(",") +
            ". Please pay attention and make responses in time accurately.";
        alert(feedback_text);
    }
}

var text_to_show;
function next_trial() {
    if (teststim.length > 0) {
        tooslow = 0;
        incorrect = 0;
        rt_start = 99999;
        rt_end = 99999;
        keys_code = "";
        trial_stim = teststim[0];
        block_trialnum++;
        text_to_show = trial_stim.word.toUpperCase();
        isi();
    } else {
        basic_times.blocks += "\nBlock " + blocknum + " end " + Date();
        if (blocknum > 3 || practice_eval()) {
            if (blocknum == 4 || blocknum == 5) {
                main_eval();
            }
            blocknum++;
            if (blocknum == 3) {                
                $("#label_top").html("");
                $("#label_right").html("");
                $("#label_left").html("");
            }
            nextblock();
        } else {
            if (blocknum == 1) {
                practice_repeated.block1 += 1;
            } else if (blocknum == 2) {
                practice_repeated.block2 += 1;
            } else if (blocknum == 3) {
                practice_repeated.block3 += 1;
            }
            nextblock();
        }
    }
}

function add_response() {
    var curr_type;
    var act_type = trial_stim.type;
    if (
        ["selfrefitem", "otherrefitem", "target"].indexOf(act_type) >= 0
    ) {
        curr_type = act_type;
    } else {
        curr_type = "main_item";
        if (blocknum > 3 && incorrect != 1 && tooslow != 1 && rt_start > 150 && rt_start < 800) {
            if (act_type == "probe") {
                all_main_rts.probs.push(rt_start);
            } else {
                all_main_rts.irrs.push(rt_start);
            }
        }
    }
    if (!(curr_type in rt_data_dict)) {
        rt_data_dict[curr_type] = [];
    }
    if (incorrect == 1 || tooslow == 1) {
        rt_data_dict[curr_type].push(-1);
    } else {
        rt_data_dict[curr_type].push(rt_start);
    }
    var key_letter;
    if (keys_code == 69) {
        key_letter = "e";
    } else if (keys_code == 73) {
        key_letter = "i";
    } else {
        key_letter = keys_code;
    }
    cit_data +=
        subj_id +
        "\t" +
        condition +
        "\t" +
        cat_order +
        "\t" +
        blocknum +
        "\t" +
        block_trialnum +
        "\t" +
        trial_stim.word +
        "\t" +
        trial_stim.cat +
        "\t" +
        trial_stim.type +
        "\t" +
        key_letter +
        "\t" +
        rt_start +
        "\t" +
        rt_end +
        "\t" +
        incorrect +
        "\t" +
        tooslow +
        "\t" +
        (isi_delay + isi_delay_minmax[0]) +
        "\t" +
        String(new Date().getTime()) +
        "\n";
    teststim.shift();
    next_trial();
}
var practice_num = 1;
function call_practice_stim() {
    //takes halves of the practice stims generated
    if (practice_num % 2 == 1) {
        // generate and take first half
        practice_stim();
        teststim = prac_teststim.slice(0, Math.floor(prac_teststim.length / 2));
    } else {
        // just take second half
        teststim = prac_teststim.slice(
            Math.floor(prac_teststim.length / 2),
            prac_teststim.length
        );
    }
    practice_num++;
}
function nextblock() {
    $("*").css("cursor", "auto");
    if (blocknum <= num_of_blocks) {
        block_trialnum = 0;
        if (blocknum == 1) {
            response_deadline = 10500;
            first_practice_stim();
        } else if (blocknum == 2) {
            response_deadline = 2000;
            call_practice_stim();
        } else if (blocknum == 3) {
            response_deadline = response_deadline_main;
            call_practice_stim();
        } else {
            if (blocknum == 6 ) {
                if (distance_order == 'wide1st') {
                    dstnc_state = 1;
                    $("#label_top").html("familiar to you?");
                    $("#label_right").html('familiar = "I"');
                    $("#label_left").html('unfamiliar = "E"');
                } else {
                    dstnc_state = 0;
                    $("#label_top").html("");
                    $("#label_right").html("");
                    $("#label_left").html("");
                }
            }
            response_deadline = response_deadline_main;
            main_stim();
        }
        rt_data_dict = {};
        show_blockstart();
    } else {
        basic_times.blocks += "\nBlock " + blocknum + " end_last " + Date();
        ins = "";
        $("#div_cit_main").hide();
        lighten_bg();
        selectable_bg();
        $("#div_outro_end").show();
    }
}
var first_blockstart = true;
function show_blockstart() {
    if (practice_repeated["block" + blocknum] == 0 || blocknum > 3) {
        $("#infotext").html(block_texts[blocknum]);
    }
    $("#div_cit_main").hide();
    if (first_blockstart == true) {
        first_blockstart = false;
    } else {
        $("#div_cit_blockstart").show();
    }
}
function runblock() {
    basic_times.blocks += "\nBlock " + blocknum + " start " + Date();
    $("*").css("cursor", "none");
    $("#div_cit_blockstart").hide();
    $("#start_text").show();
    $("#div_cit_main").show();
    can_start = true;
}
function start_trials() {
  setTimeout(function() {
    next_trial();
  }, isi_delay_minmax[0]);
}

$(document).ready(function() {
    $(document).keyup(function(es) {
        if (listn_end == true) {
            upcode = es.keyCode || es.which;
            if (upcode == keys_code) {
                rt_end = performance.now() - start;
                listn_end = false;
            }
        } else if (can_start === true) { //starting screen
            code = es.keyCode || es.which;
            if (code == 32) {
                //space
                can_start = false;
                $("#start_text").hide();
                start_trials();
            }
        }
    });
    $(document).keydown(function(e) {
        if (listen === true) {
            rt_start = now() - start;
            keys_code = e.keyCode || e.which;
            if (keys_code == 69 || keys_code == 73) {
                clearTimeout(response_window);
                listen = false;
                listn_end = true;
                if (keys_code == 69) {
                    //nontarget
                    if (correct_key == "e") {
                        post_resp_hold();
                    } else if (correct_key == "i") {
                        flash_false();
                    }
                } else if (keys_code == 73) {
                    //target
                    if (correct_key == "i") {
                        post_resp_hold();
                    } else if (correct_key == "e") {
                        flash_false();
                    }
                }
            }
        }
    });
});
