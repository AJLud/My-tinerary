import db from '../Config/firebase-setup';

const getTravelByTripId = (tripID, setTravel) => {
  const travelArray = [];
  db.collection('trips')
    .doc(tripID)
    .collection('travel')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const travelData = doc.data();
        const travelId = doc.id;
        const combinedTravelIdAndData = { travelId, ...travelData };
        travelArray.push(combinedTravelIdAndData);
      });
      setTravel(travelArray);
    });
};

export default getTravelByTripId;
