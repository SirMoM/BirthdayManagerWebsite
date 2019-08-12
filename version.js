
let version = 'Version: 0.2.x-beta';
let time = 'Buildtime:  12-08-2019 17:47:50';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.2.x-beta
Buildtime: 12-08-2019 17:47:50
Application-name: Birthday Manager
*/
