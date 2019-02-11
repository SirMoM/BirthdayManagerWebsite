
let version = 'Version: 0.0.1-beta';
let time = 'Buildtime:  11-02-2019 20:34:41';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.0.1-beta
Buildtime: 11-02-2019 20:34:41
Application-name: Birthday Manager
*/
