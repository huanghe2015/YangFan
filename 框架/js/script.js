/**
 * Created by AK12 on 2016/10/22 0022.
 */
"use strict";
var userNamePrefix="userName=";
var passwrodPrefix="password=";
var dateInfoPrefix="date=";
var date=new Date();
var days=30;
var timeNow;
var encryptionReadycCookieInfo;
function setEncryptionreadyCookie(userName,encryptedPassword)
{
	timeNow= date.getTime () + days * 86400000;
	encryptionReadycCookieInfo= dateInfoPrefix + timeNow.toString() + userNamePrefix + userName + passwrodPrefix + encryptedPassword;
	return encryptionReadycCookieInfo;
}
function getCookie()
{
	return document.cookie;
}