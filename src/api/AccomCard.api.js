import db from '../Config/firebase-setup';

const getAccommodationByTripId = (tripID, setAccommodation) => {
  const accommData = [];
  db.collection('trips')
    .doc(tripID)
    .collection('hotels')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        accommData.push(doc.data());
      });
      setAccommodation(accommData);
    });
};

export default getAccommodationByTripId;
