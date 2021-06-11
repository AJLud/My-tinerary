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

const Profile = ({ user, setUser }) => {
  console.log(user);
  return (
    <IonContent>
      <IonList>
        <IonListHeader lines="full">
          <IonLabel>
            <h1>Profile</h1>
          </IonLabel>
          <IonButton onClick={() => setUser(false)}>Sign Out</IonButton>
        </IonListHeader>
        <IonItem>
          <IonAvatar slot="end">
            <IonImg src={item.src} />
          </IonAvatar>
          <IonLabel>name</IonLabel>
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

        <IonItem lines="none">
          <IonLabel color="secondary">Settings</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
};
export default Profile;
