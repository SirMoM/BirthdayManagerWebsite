
let version = 'Version: 0.1.x-beta';
let time = 'Buildtime:  05-03-2019 22:23:42';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.1.x-beta
Buildtime: 05-03-2019 22:23:42
Application-name: Birthday Manager
*/
