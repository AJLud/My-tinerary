import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonButton,
  IonAvatar,
} from '@ionic/react';

const BuddiesCard = () => (
  <>
    <IonCard>
      <IonCardTitle>Buddies</IonCardTitle>

      <IonList>
        <IonAvatar />
      </IonList>

      <IonButton color="success">
        <Link to="/form"> Edit</Link>
      </IonButton>
    </IonCard>
  </>
);

export default BuddiesCard;
