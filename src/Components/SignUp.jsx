import { IonButton, IonInput, IonItem } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <>
    <Link to="/signup">
      <IonButton>Sign up</IonButton>
    </Link>
    <IonItem>
      <IonInput type="name" placeholder=" ...Name">
        Enter Name
      </IonInput>
    </IonItem>
    <IonItem>
      <IonInput type="name" placeholder=" ...Email">
        Enter Email
      </IonInput>
    </IonItem>
  </>
);

export default SignUp;
