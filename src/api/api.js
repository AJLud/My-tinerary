import db from '../Config/firebase-setup';

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
    })
    .catch((err) => {
      console.log(err);
    });
};

// trying to make filtering function where you can pull trips that have passed curr date
// currently returning nothing
const getPastTripsByUser = (user, setUserTrips) => {
  const userTripsArray = [];
  const currDate = Math.floor(Date.now() / 1000);

  db.collection('trips')
    .where('owner', '==', user.username)
    .where('start_date.seconds', '<=', currDate)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const tripData = doc.data();
        const tripId = doc.id;
        const combinedTripIdAndData = { tripId, ...tripData };
        userTripsArray.push(combinedTripIdAndData);
      });
      setUserTrips(userTripsArray);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getTripsByUser, getPastTripsByUser };
