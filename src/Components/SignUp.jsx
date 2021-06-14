import { IonButton, IonInput, IonItem } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <>
    <form>
      <IonItem>
        <IonInput type="name" placeholder=" ...Name" />
      </IonItem>
      <IonItem>
        <IonInput type="name" placeholder=" ...Email" />
      </IonItem>
      <IonButton>Register</IonButton>
      <Link to="/">
        <IonButton>Back To Login</IonButton>
      </Link>
    </form>
  </>
);

export default SignUp;
