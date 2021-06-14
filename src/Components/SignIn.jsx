import { React, useState } from 'react';
import {
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonContent,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import db from '../Config/firebase-setup';

const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    db.collection('Users')
      .where('username', '==', username)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const user = doc.data();
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSignIn(username, password, setUser);
        }}
      >
        <IonItem>
          <IonLabel>
            Username
            <IonInput
              required
              value={username}
              type="text"
              placeholder=" ...Username"
              onIonChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Password
            <IonInput
              required
              value={password}
              type="password"
              placeholder=" ...Password"
              onIonChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </IonLabel>
        </IonItem>
        <IonButton type="submit">Login</IonButton>
        <Link to="/signup">
          <IonButton>Sign up</IonButton>
        </Link>
      </form>
    </IonContent>
  );
};
export default SignIn;
