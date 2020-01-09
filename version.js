
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  09-01-2020 15:41:28';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 09-01-2020 15:41:28
Application-name: Birthday Manager
*/
