
let version = 'Version: 0.2.x-beta';
let time = 'Buildtime:  29-04-2019 22:06:27';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time + tab + tab + tab + "THIS VERSION IS NOT COMPATIBLE WITH LATER VERSIONS");

buildInfo.appendChild(versionTxt);
/*
Version: 0.2.x-beta
Buildtime: 29-04-2019 22:06:27
Application-name: Birthday Manager
*/
