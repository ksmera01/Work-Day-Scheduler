$(document).ready(function () {

    // Created function to show the current date in the header:
    function showHeaderDate() {
        var HeaderDate = moment().format('dddd, MMMM Do');
        $("#currentDay").text(HeaderDate);
    }

    showHeaderDate();

    var currentHour = moment().format("HH");
    var currentMinute = moment().format("mm");
    var amOrPm = moment().format("A");

    console.log(currentHour);
    console.log(amOrPm);
    console.log(currentMinute);

    // Cycles through hour ids and sets colors appropriately:
    if (currentHour == "9" && currentMinute <= "59" && amOrPm == "AM")
        $("#9am").addClass("present") &&
            $("#10am").addClass("future") &&
            $("#11am").addClass("future") &&
            $("#12pm").addClass("future") &&
            $("#1pm").addClass("future") &&
            $("#2pm").addClass("future") &&
            $("#3pm").addClass("future") &&
            $("#4pm").addClass("future") &&
            $("#5pm").addClass("future")
    else $("#9am").addClass("past")

    if (currentHour == "10" && currentMinute <= "59" && amOrPm == "AM")
        $("#10am").addClass("present") &&
            $("#11am").addClass("future") &&
            $("#12pm").addClass("future") &&
            $("#1pm").addClass("future") &&
            $("#2pm").addClass("future") &&
            $("#3pm").addClass("future") &&
            $("#4pm").addClass("future") &&
            $("#5pm").addClass("future")
    else $("#10am").addClass("past")

    if (currentHour == "11" && currentMinute <= "59" && amOrPm == "AM")
        $("#11am").addClass("present") &&
            $("#12pm").addClass("future") &&
            $("#1pm").addClass("future") &&
            $("#2pm").addClass("future") &&
            $("#3pm").addClass("future") &&
            $("#4pm").addClass("future") &&
            $("#5pm").addClass("future")
    else $("#11am").addClass("past")

    if (currentHour == "12" && currentMinute <= "59" && amOrPm == "PM")
        $("#12pm").addClass("present") &&
            $("#1pm").addClass("future") &&
            $("#2pm").addClass("future") &&
            $("#3pm").addClass("future") &&
            $("#4pm").addClass("future") &&
            $("#5pm").addClass("future")
    else $("#12pm").addClass("past")

    if (currentHour == "13" && currentMinute <= "59" && amOrPm == "PM")
        $("#1pm").addClass("present") &&
            $("#2pm").addClass("future") &&
            $("#3pm").addClass("future") &&
            $("#4pm").addClass("future") &&
            $("#5pm").addClass("future")
    else $("#1pm").addClass("past")

    if (currentHour == "14" && currentMinute <= "59" && amOrPm == "PM")
        $("#2pm").addClass("present") &&
            $("#3pm").addClass("future") &&
            $("#4pm").addClass("future") &&
            $("#5pm").addClass("future")
    else $("#2pm").addClass("past")

    if (currentHour == "15" && currentMinute <= "59" && amOrPm == "PM")
        $("#3pm").addClass("present") &&
            $("#4pm").addClass("future") &&
            $("#5pm").addClass("future")
    else $("#3pm").addClass("past")

    if (currentHour == "16" && currentMinute <= "59" && amOrPm == "PM")
        $("#4pm").addClass("present") &&
            $("#5pm").addClass("future")
    else $("#4pm").addClass("past")

    if (currentHour == "17" && currentMinute <= "59" && amOrPm == "PM")
        $("#5pm").addClass("present")
    else $("#5pm").addClass("past")

});