'use strict';

var app = angular.module("HospitalApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: "/partials/doctors.html",
    controller: "OfficeCtrl"
  }).
  when('/patients/:last_name', {
    templateUrl: "/partials/patients.html",
    controller: "PatientCtrl"
  });
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
    databaseURL: creds.databaseURL
	};
});
