
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  12-08-2019 19:40:24';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 12-08-2019 19:40:24
Application-name: Birthday Manager
*/
