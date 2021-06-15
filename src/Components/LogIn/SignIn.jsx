import { React, useState } from 'react';
import {
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonContent,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import db from '../../Config/firebase-setup';

/* eslint-disable */
const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (username, password, setUser) => {
    db.collection('Users')
      .where('username', '==', username)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let user = doc.data();
          if (!user) {
            alert('Login Attempt Failed');
          }
          if (user.password === password) {
            setUser({ username: user.username });
          } else {
            alert('Login Attempt Failed');
          }
        });
      });

    //Finish this pls
  };

  return (
    <>
      <IonContent>
        <Link to="/signup">
          <IonButton>Sign up</IonButton>
        </Link>
        <IonItem>
          <IonLabel>
            Username
            <IonInput
              value={username}
              type="text"
              placeholder=" ...Username"
              onIonChange={(e) => {
                setUsername(e.target.value);
              }}
            ></IonInput>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Password
            <IonInput
              value={password}
              type="password"
              placeholder=" ...Password"
              onIonChange={(e) => {
                setPassword(e.target.value);
              }}
            ></IonInput>
          </IonLabel>
        </IonItem>
        <IonButton
          onClick={() => {
            handleSignIn(username, password, setUser);
          }}
        >
          Login
        </IonButton>
      </IonContent>
    </>
  );
  /* eslint-enable */
};
export default SignIn;
