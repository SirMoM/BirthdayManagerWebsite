
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  16-01-2020 11:00:23';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 16-01-2020 11:00:23
Application-name: Birthday Manager
*/
