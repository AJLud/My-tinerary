import db from '../Config/firebase-setup';
/* eslint-disable */
const deleteTravelByID = (tripId, travelId) =>
  db
    .collection('trips')
    .doc(tripId)
    .collection('travel')
    .doc(travelId)
    .delete()
    .catch((err) => `Deletion failed: ${err}`);

export default deleteTravelByID;
