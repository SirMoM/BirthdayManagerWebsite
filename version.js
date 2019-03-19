
let version = 'Version: 0.1.x-beta';
let time = 'Buildtime:  19-03-2019 20:52:37';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.1.x-beta
Buildtime: 19-03-2019 20:52:37
Application-name: Birthday Manager
*/
