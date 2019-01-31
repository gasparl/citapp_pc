// translation
var tranlate_count = 0;

capitalize = function(str1) {
    return str1.charAt(0).toUpperCase() + str1.slice(1);
};

//only allow number in input field
function valid_nums(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function fill_up_demo() {
    $("#exp_title_id").val("detect_relevant_date");
    $("#subj_num_id").val("suspect_01");
    $("#probe_id").val('MAY 09');
    $("#targ_id").val('AUG 25');
    $("#irr1_id").val('JUN 14');
    $("#irr2_id").val('DEC 05');
    $("#irr3_id").val('FEB 12');
    $("#irr4_id").val('MAR 29');
}

function valid_chars(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[a-zA-Z0-9_.-]/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
//do nothing
function noop() {
    $.noop();
}

// change div - if good to go. Two optional functions to include in execution (default does nothing)

function change_div(
    current,
    next,
    good_to_go = true,
    onchange_function1 = noop,
    onchange_function2 = noop
) {
    if (good_to_go === true) {
        var toHide;
        onchange_function1();
        onchange_function2();
        if (typeof(current) == "string") {
            toHide = current;
        } else {
            toHide = "#" + current.parentNode.id;
        }
        $(toHide).hide();
        $(next).show();
    }
}

function change_menu(
    menu_to_show
) {
    ['cit_tab', 'settings_tab', 'demo_tab'].forEach(function(memuee) {
        $("#" + memuee).hide();
        $("#" + memuee + "_nav").css("background", "#333333");
        $("#" + memuee + "_nav").css("color", "#fff");
        $("#" + memuee + "_nav").css("font-weight", "normal");
        $("#" + memuee + "_nav").css("pointer-events", "auto");
    });
    $("#" + menu_to_show).show();
    $("#" + menu_to_show + "_nav").css("background", "#ccc");
    $("#" + menu_to_show + "_nav").css("color", "#000");
    $("#" + menu_to_show + "_nav").css("font-weight", "bold");
    $("#" + menu_to_show + "_nav").css("pointer-events", "none");
}

//after forms, check if all filled in
function validate_form(form_class) {
    var is_valid = true;
    $(form_class).each(function() {
        if ($(this).val() === "") is_valid = false;
    });
    if (is_valid === false) {
        alert("Please fill in all fields.");
    }
    return is_valid;
}

//validate selection of meaningful items
function check_selected() {
    var is_valid = true;
    if (countC0 === 0 || countC1 === 0) {
        is_valid = false;
        alert(
            'Please select at least one from each category, or the option "None".'
        );
    }
    return is_valid;
}
var inducer_items, subj_id, cit_version;
var s_captions, e_captions;

function starter() {
    chrome_check("Last warning! Your browser seems to be " + browser_name + ", and not Chrome. The application may fail or prove suboptimal in browsers other than Google Chrome.");
    experiment_title = $("#exp_title_id").val();
    subj_id = $("#subj_num_id").val();
    condition = parseInt($('input[name=cit_version]:checked').val());
    if (condition == 0) {
        cit_version = "standard";
    } else {
        cit_version = "enhanced";
    }
    num_of_blocks = parseInt($('input[name=num_of_blcks]:checked').val()) + 3;
    inducer_items = [
        $("#i_1_id").val(),
        $("#i_2_id").val(),
        $("#i_3_id").val(),
        $("#i_4_id").val(),
        $("#i_5_id").val(),
        $("#i_6_id").val(),
        $("#i_7_id").val(),
        $("#i_8_id").val(),
        $("#i_9_id").val()
    ];
    s_captions = [
        $("#s_top_id").val(),
        $("#s_left_id").val(),
        $("#s_right_id").val()
    ];
    e_captions = [
        $("#e_top_id").val(),
        $("#e_left_id").val(),
        $("#e_right_id").val()
    ];
    cit_initials();
    create_stim_base();
}
//background changes
function darken_bg() {
    $("#html_id").css("background", bg_color);
}

function lighten_bg() {
    $("#html_id").css("background", "#666666");
}

function selectable_bg() {
    $("#html_id").css({
        "-webkit-user-select": "text" /* Chrome/Safari/Opera */ ,
        "-moz-user-select": "text" /* Firefox */ ,
        "-ms-user-select": "text" /* IE/Edge */ ,
        "-khtml-user-select": "text" /* Konqueror */ ,
        "user-select": "text" /* non-prefixed version */
    });
    $("html").unbind("copy paste drop");
}

function no_select_bg() {
    $("#html_id").css({
        "-webkit-user-select": "none" /* Chrome/Safari/Opera */ ,
        "-moz-user-select": "none" /* Firefox */ ,
        "-ms-user-select": "none" /* IE/Edge */ ,
        "-khtml-user-select": "none" /* Konqueror */ ,
        "user-select": "none" /* non-prefixed version */
    });
    darken_bg();
}

//calculate sum
function sum(array_to_sum) {
    var sum = 0;
    array_to_sum.forEach(function(item) {
        sum += item;
    });
    return sum;
}
//calculate mean
function mean(array_to_avg) {
    var mean = sum(array_to_avg) / array_to_avg.length;
    return mean;
}

function sd(array_for_sd) {
    var m = this.mean(array_for_sd);
    return Math.sqrt(array_for_sd.reduce(function(sq, n) {
        return sq + Math.pow(n - m, 2);
    }, 0) / (array_for_sd.length - 1));
}

function randomdigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function seconds_between_dates(startDate, endDate) {
    return Math.abs(new Date(startDate) - new Date(endDate)) / 1000;
}

// timing
var now = function() {
    var performance = window.performance || {};
    performance.now = (function() {
        return (
            performance.now ||
            performance.webkitNow ||
            performance.msNow ||
            performance.oNow ||
            performance.mozNow ||
            function() {
                return new Date().getTime();
            }
        );
    })();
    return performance.now();
};
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

//shuffle
function shuffle(array) {
    var newarr = [];
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        newarr[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return newarr;
}

// random choice from array
function rchoice(array) {
    return array[Math.floor(array.length * Math.random())];
}

// pythonic range (integers from START until before END)
function range(start, end) {
    r = [];
    for (var i = start; i < end; i++) {
        r.push(i);
    }
    return r;
}

function evulat_dcit(d_cit) {
    if (d_cit > 0.4) {
        return "; which may be interpreted as a strong indication of guilt.";
    } else if (d_cit > 0.3) {
        return "; which may be interpreted as a fair indication of guilt.";
    } else if (d_cit > 0.1) {
        return "; which may be interpreted as a weak indication of guilt.";
    } else if (d_cit > 0) {
        return "; which may be interpreted as indeterminate.";
    } else if (d_cit > -0.1) {
        return "; which may be interpreted as a weak indication of innocence.";
    } else {
        return "; which may be interpreted as a fair indication of innocence.";
    }
}
// end task
var f_name;

function ro(numbr) {
    return (Math.round(numbr * 100) / 100).toFixed(2);
}
function end_save() {
    selectable_bg();
    f_name =
        experiment_title +
        "_" +
        subj_id +
        "_" +
        cit_version +
        "_" +
        (num_of_blocks - 3) +
        "block_" +
        neat_date() +
        ".txt";
    var dcit = (mean(all_main_rts.probs) - mean(all_main_rts.irrs)) / sd(all_main_rts.irrs);
    var outcome = evulat_dcit(dcit);
    outcome += " (The difference between probe and irrelevant RT means is about " + Math.round(mean(all_main_rts.probs) - mean(all_main_rts.irrs)) + " ms. [Probe M±SD = " + ro( mean(all_main_rts.probs) ) + "±" + ro( sd(all_main_rts.probs) ) + "; Irrelevant M±SD = " + ro( mean(all_main_rts.irrs) ) + "±" + ro( sd(all_main_rts.irrs) ) + "])";
    to_display = "This <i>d</i><sub>CIT</sub> for the current test is " + (Math.ceil(dcit * 100) / 100).toFixed(2) + outcome;
    console.log(to_display + "\n\nFile name: " + f_name + "\n\nFull data:\n");
    console.log(cit_data);
    $("#end_summary_id").html(to_display);
    $("#div_outro_end").hide();
    $("#div_end_screen").show();
    copy_to_clip();
}

function dl_as_file(filename_to_dl, data_to_dl) {
    var blobx = new Blob([data_to_dl], {
        type: 'text/plain'
    });
    var elemx = window.document.createElement('a');
    elemx.href = window.URL.createObjectURL(blobx);
    elemx.download = filename_to_dl;
    document.body.appendChild(elemx);
    elemx.click();
    document.body.removeChild(elemx);
}

function copy_to_clip() {
    element = $('<textarea>').appendTo('body').val(cit_data).select();
    document.execCommand("Copy");
    element.remove();
}

function neat_date() {
    var m = new Date();
    return m.getFullYear() + "" +
        ("0" + (m.getMonth() + 1)).slice(-2) + "" +
        ("0" + m.getDate()).slice(-2) + "" +
        ("0" + m.getHours()).slice(-2) + "" +
        ("0" + m.getMinutes()).slice(-2) + "" +
        ("0" + m.getSeconds()).slice(-2);
}
