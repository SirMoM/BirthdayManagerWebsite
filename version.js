
let version = 'Version: 0.1.x-beta';
let time = 'Buildtime:  06-03-2019 21:00:20';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.1.x-beta
Buildtime: 06-03-2019 21:00:20
Application-name: Birthday Manager
*/
