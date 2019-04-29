
let version = 'Version: 0.1.x-beta';
let time = 'Buildtime:  29-04-2019 22:01:44';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.1.x-beta
Buildtime: 29-04-2019 22:01:44
Application-name: Birthday Manager
*/
