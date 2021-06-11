import db from './Config/firebase-setup';

const getExcursionsByTripId = (tripID, setExcursions) => {
  let excursionsData = '';
  db.collection('trips')
    .doc(tripID)
    .collection('excursions')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        excursionsData = doc.data();
      });
      setExcursions(excursionsData);
    });
};

export default getExcursionsByTripId;
