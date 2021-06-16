import db from '../Config/firebase-setup';
/* eslint-disable */
const deleteTripById = (tripId) =>
  db
    .collection('trips')
    .doc(tripId)
    .delete()
    .catch((err) => `Deletion failed: ${err}`);

export default deleteTripById;
