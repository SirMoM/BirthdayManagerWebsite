
let version = 'Version: 0.0.1-beta';
let time = 'Buildtime:  06-02-2019 15:32:59';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.0.1-beta
Buildtime: 06-02-2019 15:32:59
Application-name: Birthday Manager
*/
