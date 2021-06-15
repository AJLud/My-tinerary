import { IonButton, IonInput, IonItem } from '@ionic/react';
import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  // const [newUsername, setNewUsername] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [newConfirmPassword, setNewConfirmPassword] = useState('');
  <form>
    <form>
      <IonItem>
        <IonInput type="text" placeholder="Username" />
      </IonItem>
      <IonItem>
        <IonInput type="password" placeholder="Password" />
      </IonItem>
      <IonItem>
        <IonInput type="password" placeholder="Confirm Password" />
      </IonItem>
      <IonItem>
        <IonInput type="text" placeholder="Avatar URL" />
      </IonItem>
      <IonButton>Register</IonButton>
      <Link to="/">
        <IonButton>Back To Login</IonButton>
      </Link>
    </form>
  </form>
);

export default SignUp;
