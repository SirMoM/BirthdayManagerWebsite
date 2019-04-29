
let version = 'Version: 0.2.x-beta';
let time = 'Buildtime:  29-04-2019 22:06:27';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.2.x-beta
Buildtime: 29-04-2019 22:06:27
Application-name: Birthday Manager
*/
