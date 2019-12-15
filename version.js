
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  15-12-2019 14:42:21';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 15-12-2019 14:42:21
Application-name: Birthday Manager
*/
