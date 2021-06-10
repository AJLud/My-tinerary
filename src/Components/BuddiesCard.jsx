import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';

const BuddiesCard = (trip) => {
  console.log(trip);
  return (
    <>
      <IonCard>
        <IonCardTitle>Vaycay Buddies</IonCardTitle>
        <IonList>
          <IonItem>Elijah</IonItem>
          <IonItem>Shekiel</IonItem>
          <IonItem>Dave the rave</IonItem>
          <IonItem>Haz</IonItem>
        </IonList>
        <IonButton color="danger">
          <Link to="/trips">Back to Trips</Link>
        </IonButton>
        <IonButton color="success">
          <Link to="/form"> Add Details</Link>
        </IonButton>
      </IonCard>
    </>
  );
};
export default BuddiesCard;
