// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDPY6lsQ1KILnmfk7ExmeEt1kudn9H8wbs',
    authDomain: 'academiadesignerfitness.firebaseapp.com',
    databaseURL: 'https://academiadesignerfitness.firebaseio.com',
    projectId: 'academiadesignerfitness',
    storageBucket: 'academiadesignerfitness.appspot.com',
    messagingSenderId: '834093922105',
    appId: '1:834093922105:web:a794c85e2f4616c8305ae8'
  },
  // UrlApi: 'http://localhost:8183',
  UrlApi: 'https://kdmy.herokuapp.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
