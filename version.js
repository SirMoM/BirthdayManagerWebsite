
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  09-01-2020 10:34:18';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 09-01-2020 10:34:18
Application-name: Birthday Manager
*/
