import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';

const AccomodationCard = (trip) => {
  console.log(trip);
  return (
    <>
      <IonCard>
        <IonCardTitle>Accomodation</IonCardTitle>
        <IonList>
          <IonItem>Hotel</IonItem>
          <IonItem>Address</IonItem>
          <IonItem>Duration of Stay</IonItem>
          <IonItem>Type of board</IonItem>
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

export default AccomodationCard;
