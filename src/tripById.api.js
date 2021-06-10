// import db from './Config/firebase-setup';

// const getTripById = (trip, setTrip) => {
//   let tripById = {};
//   db.collection('trips')
//     .doc(trip)
//     .get()
//     .then((doc) => {
//       tripById = doc.data();
//     });
//   setTrip(tripById);
// };

// export default getTripById;

import db from './Config/firebase-setup';

const getTripById = (currTrip, setCurrTrip) => {
  db.collection('trips')
    .doc(currTrip)
    .get()
    .then((snapshot) => {
      const specificTrip = snapshot.data();
      setCurrTrip(specificTrip);
    });
};

export default getTripById;
