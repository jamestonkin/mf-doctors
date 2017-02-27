'use strict';

app.controller("PatientCtrl", function($scope, HipaaStorage, $routeParams) {

  $scope.routeParams = $routeParams.last_name;
	var routParams = $routeParams.last_name.toLowerCase();

  HipaaStorage.getPatients(routParams)
  .then(function(patientCollection) {
    $scope.patients = patientCollection;
  });
});
