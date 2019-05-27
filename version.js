
let version = 'Version: 0.2.x-beta';
let time = 'Buildtime:  27-05-2019 11:05:51';
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.2.x-beta
Buildtime: 27-05-2019 11:05:51
Application-name: Birthday Manager
*/
