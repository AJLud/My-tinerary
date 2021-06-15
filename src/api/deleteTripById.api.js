import db from '../Config/firebase-setup';

const deleteTripById = (tripId) => {
  console.log('hey');
  return db
    .collection('trips')
    .doc(tripId)
    .delete()
    .catch((err) => {
      console.log(err);
    });
};
export default deleteTripById;
