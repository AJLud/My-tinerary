import db from './Config/firebase-setup';

const getTrips = (username) => {
  const tripsFromFirebase = [];
  db.collection('trips')
    .where('owner', '==', username)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        tripsFromFirebase.push(doc.data());
      });
    });
  return tripsFromFirebase;
};

export default getTrips;
