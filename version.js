
let version = 'Version: 0.2.x-beta';
let time = 'Buildtime:  13-05-2019 20:04:22';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.2.x-beta
Buildtime: 13-05-2019 20:04:22
Application-name: Birthday Manager
*/
