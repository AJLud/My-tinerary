import db from '../Config/firebase-setup';
/* eslint-disable */
const deleteAccommByID = (tripId, hotelId) =>
  db
    .collection('trips')
    .doc(tripId)
    .collection('hotels')
    .doc(hotelId)
    .delete()
    .catch((err) => `Deletion failed: ${err}`);

export default deleteAccommByID;
