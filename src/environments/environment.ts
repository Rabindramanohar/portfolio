import { SnotifyPosition } from 'ng-snotify';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
  //baseUrl : `http://localhost:4200/`,

/*   snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },*/

  firebaseConfig : {
    apiKey: "AIzaSyDY_r0NDAz_z_G5KFySjLXYe-6o6o-uW50",
    authDomain: "contact-form-db-1ca24.firebaseapp.com",
    databaseURL: "https://contact-form-db-1ca24.firebaseio.com",
    projectId: "contact-form-db-1ca24",
    storageBucket: "contact-form-db-1ca24.appspot.com",
    messagingSenderId: "207204627839",
    appId: "1:207204627839:web:b3c6704459a984ac59564a"
  }
}; 

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
