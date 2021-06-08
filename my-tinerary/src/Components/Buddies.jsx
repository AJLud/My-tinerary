import React from 'react';
import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonAvatar,
  IonListHeader,
  IonImg,
} from '@ionic/react';

const item = {
  src: 'http://placekitten.com/g/200/300',
};

const Buddies = () => (
  <IonContent>
    <IonList>
      <IonListHeader>
        <IonLabel color="secondary">Buddies</IonLabel>
        <IonButton fill="solid" color="success">
          Add Buddy
        </IonButton>
      </IonListHeader>

      <IonItem>
        <IonAvatar slot="start">
          <IonImg src={item.src} />
        </IonAvatar>
        <IonLabel color="tertiary">
          <h3>Shekiel</h3>
        </IonLabel>
        <IonButton slot="end" color="danger">
          Remove Buddy
        </IonButton>
      </IonItem>

      <IonItem>
        <IonAvatar slot="start">
          <IonImg src={item.src} />
        </IonAvatar>
        <IonLabel color="tertiary">
          <h3>Johann</h3>
        </IonLabel>
        <IonButton slot="end" color="danger">
          Remove Buddy
        </IonButton>
      </IonItem>

      <IonItem>
        <IonAvatar slot="start">
          <IonImg src={item.src} />
        </IonAvatar>
        <IonLabel color="tertiary">
          <h3>Anna</h3>
        </IonLabel>
        <IonButton slot="end" color="danger">
          Remove Buddy
        </IonButton>
      </IonItem>
    </IonList>
  </IonContent>
);
export default Buddies;
