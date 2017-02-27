'use strict';

app.factory("HipaaStorage", ($q, $http, FBCreds) => {
  let getDoctors = () => {
    return $q((resolve, reject) => {
      let doctors = [];
      $http.get(`${FBCreds.databaseURL}/doctors.json`)
      .then((hipaaObject) => {
        let doctorCollection = hipaaObject.data;
        console.log('data: ', hipaaObject.data);
        console.log('Doctors: ', doctorCollection);
        Object.keys(doctorCollection).forEach((key) => {
          doctors.push(doctorCollection[key]);
        });
        resolve(doctors);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let getPatients = (routeParam) => {
    return $q((resolve, reject) => {
      let patients = [];
      $http.get(`${FBCreds.databaseURL}/patients.json?orderBy="doctor_id"&equalTo="${routeParam}"`)
      .then((hipaaObject) => {
        let patientCollection = hipaaObject.data;
        console.log('data: ', hipaaObject.data);
        console.log('Patients: ', patientCollection);
        Object.keys(patientCollection).forEach((key) => {
          patients.push(patientCollection[key]);
        });
        resolve(patients);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  return {getDoctors, getPatients};
});
