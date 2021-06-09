import db from './Config/firebase-setup';

const getTripsByUser = (user, setUserTrips) => {
  const userTripsArray = [];
  db.collection('trips')
    .where('owner', '==', user.username)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const tripData = doc.data();
        const tripId = doc.id;
        const combinedTripIdAndData = { tripId, ...tripData };
        userTripsArray.push(combinedTripIdAndData);
      });
      setUserTrips(userTripsArray);
    });
};

export default getTripsByUser;
