const elAPI = require('extra-life-api');
var participantId = "296732";
var totalRaisedAmount = 0;
var fundraisingGoal = 0;

function pullData()
{
    elAPI.getUserInfo(participantId, false).then(data => {
        console.log(data);
        document.getElementById("totalAmount").innerText = "Extra Life Goal $" + data.totalRaisedAmount + "/$" + data.fundraisingGoal;
        //setProgressValue(data.totalRaisedAmount, data.fundraisingGoal);
    });

    var timeoutId = setTimeout(pullData, 60000);
}

window.onload = pullData;

function setProgressValue(totalRaisedAmount, fundraisingGoal)
{
    var percentage =  Math.round((totalRaisedAmount /fundraisingGoal) * 100, -1);
    document.getElementById("progress").setAttribute("aria-valuenow", percentage);
    document.getElementById("progress").setAttribute("style", "width:" + percentage);
}