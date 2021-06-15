import db from '../Config/firebase-setup';

const deleteExcursionByID = (tripId, excursionId) => {
  console.log('hey');
  console.log(tripId);
  return db
    .collection('trips')
    .doc(tripId)
    .collection('excursions')
    .doc(excursionId)
    .delete()
    .catch((err) => {
      console.log(err);
    });
};
export default deleteExcursionByID;
