import { React } from 'react';
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';

const SignIn = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>My-tinerary</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonButton>Sign in with Facebook</IonButton>
    <IonButton>Sign in with Email</IonButton>
  </IonPage>
);

export default SignIn;
