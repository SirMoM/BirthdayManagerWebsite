
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  02-02-2020 15:17:22';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 02-02-2020 15:17:22
Application-name: Birthday Manager
*/
