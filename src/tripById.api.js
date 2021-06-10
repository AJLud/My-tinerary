import db from './Config/firebase-setup';

const getTripById = (trip, setTrip) => {
  db.collection('trips')
    .where('tripId', '==', trip)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const tripData = doc.data();
        const tripId = doc.id;
        const combinedTripIdAndData = { tripId, ...tripData };
        setTrip(combinedTripIdAndData);
      });
    });
};

export default getTripById;
