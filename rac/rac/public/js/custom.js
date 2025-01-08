$("input[type ='text']").attr('autocomplete', 'off');
$("input[type ='email']").attr('autocomplete', 'off');
$("input[type ='password']").attr('autocomplete', 'off');

$('.emailspace').keypress(function(e) {
    if (e.which === 32)
        return false;
});
/* preloader */



/* $("body").on("contextmenu",function(e){
swal.fire("Right Click Not Working",'',"error");
return false;
});

$(document).keydown(function (event) {
if (event.keyCode == 123) { // Prevent F12
    swal.fire("Prevent F12",'',"error");
    return false;
} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I 
    swal.fire("Prevent Ctrl+Shift+I ",'',"error");       
    return false;
}
else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) { // Prevent Ctrl+Shift+J 
    swal.fire("Prevent Ctrl+Shift+J ",'',"error");       
    return false;
}
else if (event.ctrlKey && event.keyCode == 85) { // Prevent Ctrl+U 
    swal.fire("Prevent Ctrl+U ",'',"error");       
    return false;
}

}); */

function handlePreloader() {
    if ($('.preloader').length) {
        $('body').removeClass('active-preloader-ovh');
        $('.preloader').fadeOut();
    }
}

var dd = $('.vticker').easyTicker({
    direction: 'up',
    easing: 'swing',
    speed: 'slow',
    interval: 2000,
    height: '270',
    visible: 1,
    mousePause: 0,

}).data('easyTicker');

jQuery(window).on('load', function() {
    (function($) {
        handlePreloader()

        // thmScrollAnim();

    })(jQuery);
});


/* preloader */



$(".all-cat-sec img,.marsh-pic img ").hover(function() {
    $(this).toggleClass("bounceIn animated");
});

$(".search").click(function() {
    $("#search").toggleClass("open");
});

$(".close").click(function() {
    $("#search").removeClass("open");
});
/* home slider */

/* home slider */


/* No auto complete */

$(function() {

    /* Ajax Setup */
    /* $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        beforeSend: function() {
            $('.preloader').show();
            $('.loader').removeClass('hide')
        },
        complete: function() {
            $('.preloader').hide();
            $('.loader').addClass('hide')
        },
        error: function(){
            console.log("Reaching Else");
            $('.preloader').hide();
            $('.loader').addClass('hide')
        }
    });*/

    /* Prevent modal disapper when clicking outside modal */

    $('#myModal').modal({
        backdrop: 'static',
        keyboard: false
    })
});



/* Field Validation JS */

$(document).on('keypress mouseenter mouseleave', '.numbersonly', function(e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        e.preventDefault();
        return false;
    }
});

$(document).on('keydown mouseenter mouseleave', '.textonly', function(e) {
    var key = e.keyCode;
    if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key == 190) || (key == 9))) {
        e.preventDefault();
    }
});

$(document).on('cut copy paste', '.nopaste', function(e) {
    e.preventDefault();
    return false;
});



Ajax = {
    start: function(data, url, method = null) {
        var d = new Date();
        return $.ajax({
            data: data,
            url: url,
            type: method == null ? "POST" : method,
            dataType: 'json',

        });
    },
    upload: function(formData, url) {
        return $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
        });
    }
};


$(document).on('keydown mouseenter mouseleave', '.textonly', function(e) {
    only_text(e);
});

$(document).on('keypress mouseenter mouseleave', '.numbersonly', function(e) {
    only_number(e);
});

$(document).on('keydown mouseenter mouseleave', '.textnumsponly', function(e) {
    text_num_sp(e);
});

$(document).on('keypress mouseenter mouseleave', '.decimalonly', function(event) {
    return isNumber(event, this);
});


function only_number(e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        e.preventDefault();
        return false;
    }
}

$(document).on('keydown mouseenter mouseleave', '.textnumonly', function(e) {
    only_text_num(e);
});

function only_text(e) {
    //$(this).parents('div .invalid-feedback').html('');
    var key = e.keyCode;

    if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key == 190) || (key == 9))) {
        e.preventDefault();
    }
}

function only_text_num(e) {
    //$(this).parents('div .invalid-feedback').html('');
    var key = e.which || e.keyCode;
    //console.log(e.key); 
    if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (!e.shiftKey && key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key >= 65 && key <= 90) || (key == 190) || (key == 9))) {
        e.preventDefault();
    }
}

function text_num_sp(e) {
    var key = e.which || e.keyCode;
    if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key == 9) || (key >= 48 && key <= 57) || (key == 189) || (key == 189) || (key == 190))) {
        e.preventDefault();
        return false;
    }
}

// Function to check letters and numbers
/*function only_text_num(inputtxt)
{
$(this).keydown(function(e) {
var key = e.which || e.keyCode;
console.log(key);
if(e.shiftKey && key >= 48 && key <= 57) {
 return false;
}
else {
  if(key >= 186 && key <= 187 || key >= 191 && key <= 222) {
   return false;
 }
 else {
   return true;
 }
}
});
}*/


function isNumber(evt, element) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (
        (charCode != 45 || $(element).val().indexOf('-') != -1) && // “-” CHECK MINUS, AND ONLY ONE.
        (charCode != 46 || $(element).val().indexOf('.') != -1) && // “.” CHECK DOT, AND ONLY ONE.
        (charCode < 48 || charCode > 57) && charCode != 8)
        return false;

    return true;
}



$('#phone').on('change', function() {
    //console.log($(this).val());
    var val = $(this).val();
    var len = val.length;
    if (val.indexOf('0') == 0) {
        swal.fire('', 'First number should not be 0', 'error');
        $(this).val('');
    }
    if (len < 10) {
        swal.fire('', "Please Enter 10 Digit Mobile Number Only.", "error");
        var val = $(this).val('');
    }
});


$('.noenter').keydown(function(e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
    }
    e.preventDefault();
});


$(document).on('change', '#email', function() {
    var email = $(this).val();
    if (email.length > 0) {
        email = $.trim(email);
        var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (pattern.test(email)) {
            return true;
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please Enter valid email',
                type: 'error',
                confirmButtonText: 'Ok'
            })
            $(this).val('');
            return false;
        }
    }
});


function calculate_exact_age(date) {
    var mdate = date;
    var dayThen = parseInt(mdate.substring(0, 2), 10);
    var monthThen = parseInt(mdate.substring(3, 6), 10);
    var yearThen = parseInt(mdate.substring(6, 10), 10);
    var today = new Date();
    var birthday = new Date(yearThen, monthThen - 1, dayThen);
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();
    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
    var month_age = Math.floor(day_age / 30);
    day_age = day_age % 30;
    return year_age + " years " + month_age + " months " + day_age + " days";
}

function calculate_exact_age_as_per_closingdate(date, to_Date) {
    var mdate = date;
    var dayThen = parseInt(mdate.substring(0, 2), 10);
    var monthThen = parseInt(mdate.substring(3, 6), 10);
    var yearThen = parseInt(mdate.substring(6, 10), 10);
    var today = new Date(to_Date);
    var birthday = new Date(yearThen, monthThen - 1, dayThen);
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();
    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
    var month_age = Math.floor(day_age / 30);
    day_age = day_age % 30;
    return year_age + " years " + month_age + " months " + day_age + " days";
}

function getAgeYear(date) {
    var mdate = date;
    var dayThen = parseInt(mdate.substring(0, 2), 10);
    var monthThen = parseInt(mdate.substring(3, 6), 10);
    var yearThen = parseInt(mdate.substring(6, 10), 10);
    var today = new Date();
    var birthday = new Date(yearThen, monthThen - 1, dayThen);
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();
    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
    var month_age = Math.floor(day_age / 30);
    day_age = day_age % 30;
    return year_age;
}
//get age year
function calculate_age_year(date, to_Date) {
    var mdate = date;

    var dayThen = parseInt(mdate.substring(0, 2), 10);
    var monthThen = parseInt(mdate.substring(3, 6), 10);
    var yearThen = parseInt(mdate.substring(6, 10), 10);

    var today = new Date(to_Date);

    var birthday = new Date(yearThen, monthThen - 1, dayThen);
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    var month_age = Math.floor(day_age / 30);

    day_age = day_age % 30;

    return year_age;
}

function capitalize_Words(str) {
    str = str.replace(/_/g, ' ');
    return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

function validate_email(e) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
}


/*******@author Prashant pandey
validation Message hide after 5 seconds *******/
setTimeout(function() {
    $('#validate').fadeOut('fast');
}, 5000);

$('.invalid-feedback').attr('id', 'validate');


function validatePassword(obj) {
    pwd = $(obj).val();
    pwd = $.trim(pwd);

    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
    if (pattern.test(pwd)) {
        return true;
    } else {
        swal.fire('', 'Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character (@#$%) and length should be beween 8 to 16', 'error');
        $(obj).val('')
        return false;
    }
}

function checkPin(str) {
    var pin = /^[1-9][0-9]{5}$/;
    if ((!pin.test(str))) {
        swal.fire("Please enter a pin no");
        $(this).val('');
        return false;
    }

}
//Calculate total Exp
// function calculate_exact_Expr(from_date,to_date)
// {   
//     console.log(from_date)
//     console.log(to_date)
//     var mdate = from_date;    
//     var dayThen = parseInt(mdate.substring(0,2), 10); 
//     var monthThen = parseInt(mdate.substring(3,6), 10);
//     var yearThen= parseInt(mdate.substring(6,10), 10);
//     var enddate = to_date;    
//     var dayThen1 = parseInt(enddate.substring(0,2), 10); 
//     var monthThen1 = parseInt(enddate.substring(3,6), 10);
//     var yearThen1= parseInt(enddate.substring(6,10), 10);
//     var date1 = new Date(yearThen, monthThen-1, dayThen);   
//     var date2 = new Date(yearThen1, monthThen1-1, dayThen1);                
//     var differenceInMilisecond = date1.valueOf() - date2.valueOf(); 
//     var year_age = Math.floor(differenceInMilisecond / 31536000000);
//     var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);            
//     var month_age = Math.floor(day_age/30);         
//     day_age = day_age % 30;  
//     return {year:year_age,months:month_age,day:day_age};       
//     return year_age + " years " + month_age + " months " + day_age + " days";         
// }
function calculate_exact_Expr(from_date, to_date) {

    d1 = new Date(from_date); // April 5, 2014
    d2 = new Date(to_date); // February 22, 2013
    //console.log(d1+'---'+d2)
    diff = new Date(
        d1.getFullYear() - d2.getFullYear(),
        d1.getMonth() - d2.getMonth(),
        d1.getDate() - d2.getDate()
    );
    return { year: diff.getYear(), months: diff.getMonth(), day: diff.getDate() };
    return year_age + " years " + month_age + " months " + day_age + " days";

}

function form_to_diff(from_date, to_date) {

    var from = from_date.split('-');

    /* Add one day to date */
    console.log("Old To Date" + to_date);
    to_date = moment(to_date, "DD-MM-YYYY").add(1, 'days').format('DD-MM-YYYY');

    /* Add one day to date */

    console.log("New To Data" + to_date);
    var diff = moment.preciseDiff(moment(from_date, 'DD-MM-YYYY'), moment(to_date, 'DD-MM-YYYY'), true);
    console.log(diff);
    return diff.years + ' Year ' + diff.months + ' Month ' + diff.days + ' Days ';



    /*	
    var f_date = from[2]+'-'+from[1]+'-'+from[0];
    var to = to_date.split('-');
    var t_date = to[2]+'-'+to[1]+'-'+to[0];
    //var daysInMonth = 30.5; // Days in a month on average.
    var daysInMonth = 29.5; // Days in a month on average.
    var dob = new Date(f_date);
    //console.log(dob)
    var aad;
    if (!t_date) aad = new Date();
    else aad = new Date(t_date);
    //console.log(aad)
    var yearAad = aad.getFullYear();
    var yearDob = dob.getFullYear();
    var years = yearAad - yearDob; // Get age in years.
    dob.setFullYear(yearAad); // Set birthday for this year.
    var aadMillis = aad.getTime();
    var dobMillis = dob.getTime();
    if (aadMillis < dobMillis) {
        --years;
        dob.setFullYear(yearAad - 1); // Set to previous year's birthday
        dobMillis = dob.getTime();
    }
    var days = (aadMillis - dobMillis) / 86400000;  
    var monthsDec = days / daysInMonth; // Months with remainder.
    var months = Math.floor(monthsDec); // Remove fraction from month.
    days = Math.floor(daysInMonth * (monthsDec - months));
    return years + ' Year ' + months + ' Month ' + days + ' Days ';	  
    */
}



function calculate_exact_Exprp(date, to_Date) {
    var mdate = date;
    var dayThen = parseInt(mdate.substring(0, 2), 10);
    var monthThen = parseInt(mdate.substring(3, 6), 10);
    var yearThen = parseInt(mdate.substring(6, 10), 10);
    //alert(dayThen+'-'+monthThen+'-'+yearThen);
    var today = new Date(to_Date);
    var birthday = new Date(yearThen, monthThen - 1, dayThen);
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    var month_age = Math.floor(day_age / 30);

    day_age = day_age % 30;
    //return {year:diff.getYear(),months:diff.getMonth(),day:diff.getDate()};      
    return year_age + " years " + month_age + " months " + day_age + " days";

}

function humanise(diff) {
    // The string we're working with to create the representation
    var str = [];
    // Map lengths of `diff` to different time periods
    var values = [
        [' year', 365],
        [' month', 30],
        [' day', 1]
    ];

    // Iterate over the values...
    for (var i = 0; i < values.length; i++) {
        var amount = Math.floor(diff / values[i][1]);

        // ... and find the largest time value that fits into the diff
        if (amount >= 1) {
            // If we match, add to the string ('s' is for pluralization)
            var ttt = amount + (amount > 1 ? '' : '') + ' ';
            str.push(ttt);

            // and subtract from the diff
            diff -= amount * values[i][1];
        }
    }

    return str;
}


function validateEmail(email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return pattern.test($.trim(email));

}


function age_on_date(dob, ageondate) {
    var now = new Date(ageondate);

    var today = new Date(now.getYear(), now.getMonth(), now.getDate());

    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();

    var dob = new Date(dob.substring(6, 10),
        dob.substring(3, 5) - 1,
        dob.substring(0, 2)
    );

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";


    yearAge = yearNow - yearDob;

    if (monthNow >= monthDob)
        var monthAge = monthNow - monthDob;
    else {
        yearAge--;
        var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob)
        var dateAge = dateNow - dateDob;
    else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDob;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };

    if (age.years > 1) yearString = " years";
    else yearString = " year";
    if (age.months > 1) monthString = " months";
    else monthString = " month";
    if (age.days > 1) dayString = " days";
    else dayString = " day";


    if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = "Only " + age.days + dayString + " old!";
    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
    //ageString = age.years + yearString + " old. Happy Birthday!!";
        ageString = age.years + yearString + " and " + age.months + monthString + " old.";
    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = age.years + yearString + " and " + age.months + monthString + " old.";
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + monthString + " and " + age.days + dayString + " old.";
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = age.years + yearString + " and " + age.days + dayString + " old.";
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = age.months + monthString + " old.";
    else
    //ageString = "Oops! Could not calculate age!";
        ageString = age.months + monthString + " old.";
    return ageString;
}

$.datepicker._gotoToday = function(id) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.selectedMonth = inst.currentMonth;
        inst.drawYear = inst.selectedYear = inst.currentYear;
    } else {
        var date = new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = inst.selectedMonth = date.getMonth();
        inst.drawYear = inst.selectedYear = date.getFullYear();
        // the below two lines are new
        this._setDateDatepicker(target, date);
        this._selectDate(id, this._getDateDatepicker(target));
    }
    this._notifyChange(inst);
    this._adjustDate(target);
}