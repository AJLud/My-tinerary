import db from '../Config/firebase-setup';

const getTravelByTripId = (tripID, setTravel) => {
  const travelData = [];
  db.collection('trips')
    .doc(tripID)
    .collection('travel')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        travelData.push(doc.data());
      });
      setTravel(travelData);
    });
};

export default getTravelByTripId;
