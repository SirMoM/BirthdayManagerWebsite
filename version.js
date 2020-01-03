
let version = 'Version: 0.3.5-beta';
let time = 'Buildtime:  03-01-2020 12:31:49';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.5-beta
Buildtime: 03-01-2020 12:31:49
Application-name: Birthday Manager
*/
