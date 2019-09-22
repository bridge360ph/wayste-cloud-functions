import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as glob from 'glob';
// import * as camelCase from 'camelcase';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
try {
    admin.initializeApp(functions.config().firebase);
} catch (e) {
    console.error('Failed to initialize firebase admin. ', e);
}

// const glob = require('glob');
// const camelCase = require('camelcase');

// const files = glob.sync('./**/*.f.ts', { cwd: __dirname, ignore: './node_modules/**' });
// for (let f = 0, fl = files.length; f < fl; f++) {
//     const file = files[f];
//     const functionName = camelCase(file.slice(0, -5).split('/').join('_'));
//     if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
//         exports[functionName] = require(file);
//     }
// }

export * from './db/collectorCurrentLocationList/onUpdate.f';