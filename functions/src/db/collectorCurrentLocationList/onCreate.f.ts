// import * as functions from 'firebase-functions';

// const PATH = 'collectorCurrentLocationList';

// export const collectorCurrentLocationListOnUpdate = functions.database.ref(`/${PATH}/{collectorID}`)
//     .onUpdate((change, context) => {
//         const collectorID = context.params.collectorID;
//         const updatedValue = change.after.val();

//         console.log('Collector ID: ', collectorID);
//         console.log('Updated Value: : ', updatedValue);
        
//         return Promise.resolve(null);
//     });