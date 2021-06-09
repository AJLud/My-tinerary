import React from 'react';

import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';

const AccomodationCard = () => (
  <>
    <IonCard>
      <IonCardTitle>Accomodation</IonCardTitle>
      <IonList>
        <IonItem>Hotel</IonItem>
        <IonItem>Address</IonItem>
        <IonItem>Duration of Stay</IonItem>
        <IonItem>Type of board</IonItem>
      </IonList>
      <IonButton color="success" href="/form">
        Edit
      </IonButton>
    </IonCard>
  </>
);

export default AccomodationCard;
