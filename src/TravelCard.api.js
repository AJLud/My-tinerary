import db from './Config/firebase-setup';

const getTravelByTripId = (tripID, setTravel) => {
  let travelData = '';
  db.collection('trips')
    .doc(tripID)
    .collection('travel')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        travelData = doc.data();
      });
      setTravel(travelData);
    });
};
getTravelByTripId();

export default getTravelByTripId;
