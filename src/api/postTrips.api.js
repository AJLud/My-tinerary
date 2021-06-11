import db from '../Config/firebase-setup';

const postTripByUser = () => {
  db.collection('trips')
    .add({
      trip_name: '',
      destination: '',
    })
    .then((docRef) => {
      console.log('success', docRef.id);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postTripByUser;
