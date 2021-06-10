import React from 'react';

import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';

const BuddiesCard = () => (
  <>
    <IonCard>
      <IonCardTitle>Vaycay Buddies</IonCardTitle>
      <IonList>
        <IonItem>Elijah</IonItem>
        <IonItem>Shekiel</IonItem>
        <IonItem>Dave the rave</IonItem>
        <IonItem>Haz</IonItem>
      </IonList>
      <IonButton color="success" href="/form">
        Edit
      </IonButton>
    </IonCard>
  </>
);

export default BuddiesCard;
