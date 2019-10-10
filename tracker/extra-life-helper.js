/**
 * Fill in your Extra Life information below. If you want to use the goal on your Extra Life page leave goal set to 0
 */
var userData = 
{
    "participantId" : 347722,
    "teamId" : 0,
    "goal" : 0,
    "startingAmount": 0,
};

var donationGoals = [
    {"amount": 100, "goal": "Ice Bucket Challenge"},
    {"amount": 250, "goal": "T-Rex Costume"},
    {"amount": 500, "goal": "Unlock Karaoke Incentive"},
    {"amount": 750, "goal": "Incentives Half Off"},
    {"amount": 1000, "goal": "Run Half Marathon"}
]

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

function getNextGoal(totalRaised) {
    for(var i = 0; i < donationGoals.length; i++) {
        if (totalRaised < donationGoals[i].amount) {
            document.getElementById("nextGoal").innerText = "$" + donationGoals[i].amount + " " + donationGoals[i].goal;
            break;
        }
    }
}


