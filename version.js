
let version = 'Version: 0.1.x-beta';
let time = 'Buildtime:  07-03-2019 19:28:03';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.1.x-beta
Buildtime: 07-03-2019 19:28:03
Application-name: Birthday Manager
*/
