import db from './Config/firebase-setup';

const getUserDetails = (user, setUserDetails) => {
  let userData = '';
  db.collection('Users')
    .where('username', '==', user.username)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        userData = doc.data();
      });
      setUserDetails(userData);
    });
};

export default getUserDetails;
