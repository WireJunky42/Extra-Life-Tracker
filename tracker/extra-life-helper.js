/**
 * Fill in your Extra Life information below. If you want to use the goal on your Extra Life page leave goal set to 0
 */
var userData = 
{
    "participantId" : 400560,
    "teamId" : 0,
    "goal" : 0,
    "startingAmount": 0,
};

var PARTICIPANT_URL = "https://www.extra-life.org/api/participants/{participantId}";

window.onload = getExtraLifeData();

function getExtraLifeData()
{
    $.getJSON(PARTICIPANT_URL.replace("{participantId}", userData.participantId), function(data) {
        console.log(data);
        var goal = userData.goal != 0 ? userData.goal : data.fundraisingGoal;
        var totalRaised = data.sumDonations - userData.startingAmount;
        document.getElementById("totalAmount").innerText = "Extra Life Goal $" + totalRaised + "/$" + goal;
    });

    var timeoutId = setTimeout(getExtraLifeData, 6000);
}

function setProgressBar(totalRaised, goal)
{
    var progress = (totalRaised / goal) * 100;
    $('#progress-bar').attr('aria-valuenow', progress).css('width', progress + "%").text("Extra Life Goal $" + totalRaised + "/$" + goal);
}


