import db from '../Config/firebase-setup';

const deleteTravelByID = (tripId, travelId) => {
  console.log('hey');
  return db
    .collection('trips')
    .doc(tripId)
    .collection('travel')
    .doc(travelId)
    .delete()
    .catch((err) => {
      console.log(err);
    });
};
export default deleteTravelByID;
