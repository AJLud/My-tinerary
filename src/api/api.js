import db from '../Config/firebase-setup';

const getTripsByUser = (user) => {
  const userTripsArray = [];
  return db
    .collection('trips')
    .where('owner', '==', user.username)
    .orderBy('start_date')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const tripData = doc.data();
        const tripId = doc.id;
        const combinedTripIdAndData = { tripId, ...tripData };
        userTripsArray.push(combinedTripIdAndData);
      });
      return userTripsArray;
    })
    .catch((err) => `Trips failed to fetch: ${err}`);
};

export default getTripsByUser;
