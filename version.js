
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  08-11-2019 15:57:01';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 08-11-2019 15:57:01
Application-name: Birthday Manager
*/
