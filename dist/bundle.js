(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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



},{"../userData.json":2}],2:[function(require,module,exports){
module.exports={
    "participantId" : "296732",
    "teamId" : 38574,
    "goal" : 500 
}
},{}]},{},[1]);
