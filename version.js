
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  03-01-2020 12:33:01';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 03-01-2020 12:33:01
Application-name: Birthday Manager
*/
