import db from '../Config/firebase-setup';
/* eslint-disable */
const deleteExcursionByID = (tripId, excursionId) =>
  db
    .collection('trips')
    .doc(tripId)
    .collection('excursions')
    .doc(excursionId)
    .delete()
    .catch((err) => `Deletion failed: ${err}`);

export default deleteExcursionByID;
