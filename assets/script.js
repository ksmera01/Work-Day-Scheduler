$(document).ready(function () {

    function showHeaderDate() {
        var HeaderDate = moment().format('dddd, MMMM Do');
        $("#currentDay").text(HeaderDate);
    }

    showHeaderDate();
    console.log(showHeaderDate());

});