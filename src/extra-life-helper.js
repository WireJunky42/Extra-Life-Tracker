const elAPI = require('extra-life-api');
var participantId = "296732";

function pullData()
{
    elAPI.getUserInfo(participantId, false).then(data => {
        console.log(data);
        document.getElementById("totalAmount").innerText = "$" + data.totalRaisedAmount + "/$" + data.fundraisingGoal;
    });
}

window.onload = pullData();