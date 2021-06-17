import React from 'react';
import {
  IonHeader,
  IonButton,
  IonIcon,
  IonContent,
  IonBackButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { airplane } from 'ionicons/icons';
import '../theme/planetest.css';

const Homepage = () => {
  const history = useHistory();
  const landingPage = (path) => {
    history.push(path);
  };

  return (
    <IonContent>
      <IonHeader className="header plane" class="ion-no-border">
        My-tinerary
        <IonIcon icon={airplane} />
      </IonHeader>
      <img
        src="https://media.tenor.com/images/864d09f6140c18af929bb7a1868ad4f1/tenor.gif"
        alt="plane-gif"
        className="plane-gif"
      />
      <IonButton
        onClick={() => {
          landingPage('/profile');
        }}
        color="secondary"
        expand="block"
        size="large"
      >
        Profile
      </IonButton>
      <br />
      <br />
      <IonButton
        onClick={() => {
          landingPage('/trips');
        }}
        color="secondary"
        expand="block"
        size="large"
      >
        Trips
      </IonButton>
      <br />
      <br />
      <IonButton
        onClick={() => {
          landingPage('/buddies');
        }}
        color="secondary"
        expand="block"
        size="large"
      >
        Buddies
      </IonButton>
      <br />
      <br />
      <IonButton
        onClick={() => {
          landingPage('/chats');
        }}
        color="secondary"
        expand="block"
        size="large"
      >
        Chat
      </IonButton>

      <IonBackButton />
    </IonContent>
  );
};

export default Homepage;
