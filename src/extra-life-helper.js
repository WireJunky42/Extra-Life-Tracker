const elAPI = require('extra-life-api');
var participantId = "296732";
var num = 1;

var intervalId = setInterval(pullData, 60000);

function pullData()
{
    elAPI.getUserInfo(participantId, false).then(data => {
        console.log(data);
        document.getElementById("totalAmount").innerText = "$" + data.totalRaisedAmount + "/$" + data.fundraisingGoal;
    });
}

window.onload = pullData;