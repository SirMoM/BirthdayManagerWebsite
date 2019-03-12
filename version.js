
let version = 'Version: 0.1.x-beta';
let time = 'Buildtime:  12-03-2019 22:58:27';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.1.x-beta
Buildtime: 12-03-2019 22:58:27
Application-name: Birthday Manager
*/
