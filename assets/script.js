$(document).ready(function () {

    function showHeaderDate() {
        var HeaderDate = moment().format('dddd, MMMM Do');
        $("#currentDay").text(HeaderDate);
    }

    showHeaderDate();

    document.getElementById("9am").textContent = (localStorage.getItem("9am"));
    document.getElementById("10am").textContent = (localStorage.getItem("10am"));
    document.getElementById("11am").textContent = (localStorage.getItem("11am"));
    document.getElementById("12pm").textContent = (localStorage.getItem("12pm"));
    document.getElementById("1pm").textContent = (localStorage.getItem("1pm"));
    document.getElementById("2pm").textContent = (localStorage.getItem("2pm"));
    document.getElementById("3pm").textContent = (localStorage.getItem("3pm"));
    document.getElementById("4pm").textContent = (localStorage.getItem("4pm"));
    document.getElementById("5pm").textContent = (localStorage.getItem("5pm"));

    var currentHour = moment().format("HH");
    var currentMinute = moment().format("mm");
    var amOrPm = moment().format("A");

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

    $("#9button").on("click", function (event) {
        event.preventDefault()
        var myReminder = document.getElementById("9am").value;
        localStorage.setItem("9am", myReminder);
    })

    $("#10button").on("click", function (event) {
        event.preventDefault()
        var myReminder = document.getElementById("10am").value;
        localStorage.setItem("10am", myReminder);
    })

    $("#11button").on("click", function (event) {
        event.preventDefault()
        var myReminder = document.getElementById("11am").value;
        localStorage.setItem("11am", myReminder);
    })

    $("#12button").on("click", function (event) {
        event.preventDefault()
        var myReminder = document.getElementById("12pm").value;
        localStorage.setItem("12pm", myReminder);
    })

    $("#13button").on("click", function (event) {
        event.preventDefault()
        var myReminder = document.getElementById("1pm").value;
        localStorage.setItem("1pm", myReminder);
    })

    $("#14button").on("click", function (event) {
        event.preventDefault()
        var myReminder = document.getElementById("2pm").value;
        localStorage.setItem("2pm", myReminder);
    })

    $("#15button").on("click", function (event) {
        event.preventDefault()
        var myReminder = document.getElementById("3pm").value;
        localStorage.setItem("3pm", myReminder);
    })

    $("#16button").on("click", function (event) {
        event.preventDefault()
        var myReminder = document.getElementById("4pm").value;
        localStorage.setItem("4pm", myReminder);
    })

    $("#17button").on("click", function (event) {
        event.preventDefault()
        var myReminder = document.getElementById("5pm").value;
        localStorage.setItem("5pm", myReminder);
    })

});

