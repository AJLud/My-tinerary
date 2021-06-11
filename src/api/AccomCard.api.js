import db from '../Config/firebase-setup';

const getAccommodationByTripId = (tripID, setAccommodation) => {
  let accommData = '';
  db.collection('trips')
    .doc(tripID)
    .collection('hotels')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        accommData = doc.data();
      });
      setAccommodation(accommData);
    });
};

export default getAccommodationByTripId;
