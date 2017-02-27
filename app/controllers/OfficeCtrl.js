'use strict';

app.controller("OfficeCtrl", function($scope, HipaaStorage) {

  HipaaStorage.getDoctors()
  .then(function(doctorCollection) {
    $scope.doctors = doctorCollection;
  });

});
