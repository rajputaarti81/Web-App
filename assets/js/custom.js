//Pop up function
$(function(){
    $("#addClass").click(function () {
        $('#qnimate').addClass('popup-box-on');
    });

    $("#removeClass").click(function () {
        $('#qnimate').removeClass('popup-box-on');
        $('#calendarTime').removeClass('calendar-box-on');
    });
});

//Pop up function
$(function(){
    $("#datetimepicker").focus(function () {
        console.log("hlle");
        $('#calendarTime').addClass('calendar-box-on');
        $('#qnimate').removeClass('popup-box-on');
    });

    $("#closeClass").click(function () {
        $('#calendarTime').removeClass('calendar-box-on');
    });
});