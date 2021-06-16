import db from '../Config/firebase-setup';

const deleteAccommByID = (tripId, hotelId) => {
  console.log('hey');
  return db
    .collection('trips')
    .doc(tripId)
    .collection('hotels')
    .doc(hotelId)
    .delete()
    .catch((err) => {
      console.log(err);
    });
};
export default deleteAccommByID;
