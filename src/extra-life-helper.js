const elAPI = require('extra-life-api');
var participantId = "296732";
var userInfo = "https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=" +participantId +"&format=json";

window.onload = getJson();

function setProgressValue(totalRaisedAmount, fundraisingGoal)
{
    var percentage =  Math.round((totalRaisedAmount /fundraisingGoal) * 100, -1);
    document.getElementById("progress").setAttribute("aria-valuenow", percentage);
    document.getElementById("progress").setAttribute("style", "width:" + percentage);
}

function getJson()
{
    $.getJSON(userInfo, function(data) {
        console.log(data);
        document.getElementById("totalAmount").innerText = "Extra Life Goal $" + data.totalRaisedAmount + "/$" + data.fundraisingGoal;
    });

    var timeoutId = setTimeout(pullData, 60000);
}

