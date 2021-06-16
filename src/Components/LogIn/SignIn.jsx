import { React, useState } from 'react';
import {
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonContent,
  IonHeader,
  IonIcon,
} from '@ionic/react';
import { airplane } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import db from '../../Config/firebase-setup';

/* eslint-disable */
const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
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
  };
  return (
    <IonContent>
      <IonHeader className="header plane" class="ion-no-border">
        My-tinerary <IonIcon icon={airplane} />
      </IonHeader>

      <div className="homepage-img-container">
        <img
          src="https://svgsilh.com/svg/1552354.svg"
          alt="homepage-plane"
          className="homepage-plane"
        />
      </div>

      <IonItem>
        <IonLabel>
          <strong>Username</strong>
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
          <strong>Password</strong>
          <IonInput
            expand="block"
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
        expand="block"
        onClick={() => {
          handleSignIn(username, password, setUser);
        }}
        color="primary"
        className="blue-button"
      >
        Log In
      </IonButton>

      <IonButton
        className="orange-button"
        color="secondary"
        expand="block"
        onClick={() => {
          history.push('/signup');
        }}
      >
        Sign up
      </IonButton>
    </IonContent>
  );
};
export default SignIn;
