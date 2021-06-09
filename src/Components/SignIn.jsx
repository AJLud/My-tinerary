import { React } from 'react';
import { IonItem, IonInput, IonButton } from '@ionic/react';

/* eslint-disable */
const SignIn = () => {
  return (
    <>
      <IonButton>Sign up</IonButton>
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

      <IonButton>Sign in with Facebook</IonButton>
      <IonButton>Sign in with Email</IonButton>
    </>
  );
  /* eslint-enable */
};
export default SignIn;
