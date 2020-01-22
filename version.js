
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  22-01-2020 12:39:27';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 22-01-2020 12:39:27
Application-name: Birthday Manager
*/
