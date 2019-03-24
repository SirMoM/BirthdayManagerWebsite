
let version = 'Version: 0.1.x-beta';
let time = 'Buildtime:  24-03-2019 11:59:07';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.1.x-beta
Buildtime: 24-03-2019 11:59:07
Application-name: Birthday Manager
*/
