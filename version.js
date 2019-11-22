
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  22-11-2019 16:04:05';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 22-11-2019 16:04:05
Application-name: Birthday Manager
*/
