import db from './Config/firebase-setup';

const getBuddies = (user, setBuddies) => {
  const buddiesArray = [];
  db.collection('Users')
    .where('username', '==', user.username)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const buddyData = doc.data();
        buddiesArray.push(buddyData);
      });
      setBuddies(buddiesArray);
    });
};
// this currently obtains the entire User object rather than Buddy specific array
export default getBuddies;
