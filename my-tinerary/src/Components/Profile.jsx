import React from 'react';
import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonAvatar,
  IonImg,
} from '@ionic/react';

const item = {
  src: 'http://placekitten.com/g/200/300',
};

const Profile = () => (
  <IonContent>
    <IonList>
      <IonListHeader lines="full">
        <IonLabel>
          <h1>Profile</h1>
        </IonLabel>
        <IonButton>Sign Out</IonButton>
      </IonListHeader>
      <IonItem>
        <IonAvatar slot="end">
          <IonImg src={item.src} />
        </IonAvatar>
        <IonLabel>Elijah </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Username: ElijahElijah1</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Contact Details: elijah@gmail.com</IonLabel>
      </IonItem>
      <IonItem>
        <IonButton color="warning">Change Avatar</IonButton>
      </IonItem>
      <IonItem>
        <IonLabel color="secondary">Archived Trips</IonLabel>
      </IonItem>

      <IonItem>
        <IonList>
          <IonItem>
            <IonLabel color="secondary">Buddies</IonLabel>
            <IonButton slot="end" color="success">
              Add Buddy
            </IonButton>
          </IonItem>

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
      </IonItem>

      <IonItem lines="none">
        <IonLabel color="secondary">Settings</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
);
export default Profile;
