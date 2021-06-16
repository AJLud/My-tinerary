import db from '../Config/firebase-setup';
/* eslint-disable */
const deleteTripById = (tripId) =>
  db
    .collection('trips')
    .doc(tripId)
    .delete()
    .catch((err) => {
      console.log(err);
    });
/* eslint-enable */
export default deleteTripById;
