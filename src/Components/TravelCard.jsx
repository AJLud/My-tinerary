import React from 'react';

import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';

const TravelCard = () => (
  <>
    <IonCard>
      <IonCardTitle>Travel </IonCardTitle>
      <IonList>
        <IonItem>Airport</IonItem>
        <IonItem>Departure Time</IonItem>
        <IonItem>Flight number</IonItem>
      </IonList>
      <IonButton>Edit</IonButton>
    </IonCard>
  </>
);

export default TravelCard;
