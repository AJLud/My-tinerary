import db from '../Config/firebase-setup';
/* eslint-disable */
const getTripById = (currTrip) => {
  return db
    .collection('trips')
    .doc(currTrip)
    .get()
    .then((snapshot) => {
      const specificTrip = snapshot.data();
      return specificTrip;
    });
};
export default getTripById;
