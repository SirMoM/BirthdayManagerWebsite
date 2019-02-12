
let version = 'Version: 0.0.1-beta';
let time = 'Buildtime:  12-02-2019 20:35:35';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.0.1-beta
Buildtime: 12-02-2019 20:35:35
Application-name: Birthday Manager
*/
