import React from 'react';

import { IonHeader, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Homepage = () => {
  const history = useHistory();
  const landingPage = (path) => {
    history.push(path);
  };

  return (
    <>
      <IonHeader>
        <h1>Homepage</h1>
      </IonHeader>

      <IonButton
        onClick={() => {
          landingPage('/profile');
        }}
        color="secondary"
        expand="block"
      >
        Profile
      </IonButton>

      <IonButton
        onClick={() => {
          landingPage('/trips');
        }}
        color="secondary"
        expand="block"
      >
        Trips
      </IonButton>

      <IonButton
        onClick={() => {
          landingPage('/buddies');
        }}
        color="secondary"
        expand="block"
      >
        Buddies
      </IonButton>

      <IonButton
        onClick={() => {
          landingPage('/chats');
        }}
        color="secondary"
        expand="block"
      >
        Chat
      </IonButton>
    </>
  );
};

export default Homepage;
