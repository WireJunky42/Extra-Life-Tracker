const userData = require('../userData.json')
var PARTICIPANT_URL = "https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID={participantId}&format=json"

window.onload = getExtraLifeData();

function getExtraLifeData()
{
    $.getJSON(PARTICIPANT_URL.replace("{participantId}", userData.participantId), function(data) {
        console.log(data);
        var goal = userData.goal != 0 ? userData.goal : data.fundraisingGoal;
        document.getElementById("totalAmount").innerText = "Extra Life Goal $" + data.totalRaisedAmount + "/$" + goal;
        //setProgressBar(data.totalRaisedAmount, goal);
    });

    var timeoutId = setTimeout(getExtraLifeData, 60000);
}

function setProgressBar(totalRaised, goal)
{
    var progress = (totalRaised / goal) * 100;
    $('#progress-bar').attr('aria-valuenow', progress).css('width', progress + "%").text("Extra Life Goal $" + totalRaised + "/$" + goal);
}


