
let version = 'Version: 0.1.x-beta';
let time = 'Buildtime:  24-02-2019 16:15:16';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.1.x-beta
Buildtime: 24-02-2019 16:15:16
Application-name: Birthday Manager
*/
