
let version = 'Version: 0.0.1-beta';
let time = 'Buildtime:  13-02-2019 23:11:11';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.0.1-beta
Buildtime: 13-02-2019 23:11:11
Application-name: Birthday Manager
*/
