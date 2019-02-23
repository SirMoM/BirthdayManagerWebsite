
let version = 'Version: 0.0.1-beta';
let time = 'Buildtime:  23-02-2019 16:29:38';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.0.1-beta
Buildtime: 23-02-2019 16:29:38
Application-name: Birthday Manager
*/
