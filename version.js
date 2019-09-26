
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  26-09-2019 11:09:19';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 26-09-2019 11:09:19
Application-name: Birthday Manager
*/
