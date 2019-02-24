
let version = 'Version: 0.0.1-beta';
<<<<<<< HEAD
let time = 'Buildtime:  24-02-2019 16:07:01';
=======
let time = 'Buildtime:  23-02-2019 16:29:38';
>>>>>>> branch 'master' of https://github.com/SirMoM/BirthdayManagerWebsite
let tab = " - "

var buildInfo = document.getElementById("buildInfo");

var versionTxt = document.createTextNode(version + tab + time);

buildInfo.appendChild(versionTxt);
/*
Version: 0.0.1-beta
<<<<<<< HEAD
Buildtime: 24-02-2019 16:07:02
=======
Buildtime: 23-02-2019 16:29:38
>>>>>>> branch 'master' of https://github.com/SirMoM/BirthdayManagerWebsite
Application-name: Birthday Manager
*/
