import React from 'react';
import {
  IonButton,
  IonContent,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/react';

const Buddies = () => (
  <IonContent>
    <IonList>
      <IonListHeader>
        <IonLabel color="secondary">Buddies</IonLabel>
        <IonButton fill="solid" color="success">
          Add Buddy
        </IonButton>
      </IonListHeader>
    </IonList>
  </IonContent>
);

export default Buddies;
