
let version = 'Version: 0.3.x-beta';
let time = 'Buildtime:  04-02-2020 13:11:31';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.3.x-beta
Buildtime: 04-02-2020 13:11:31
Application-name: Birthday Manager
*/
