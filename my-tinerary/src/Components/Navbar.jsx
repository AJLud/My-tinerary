import React from 'react';
import { IonFab, IonFabButton, IonFabList } from '@ionic/react';

const Navbar = () => (
  <IonFab vertical="bottom" horizontal="end">
    <IonFabButton>Nav</IonFabButton>
    <IonFabList side="top">
      <IonFabButton>Profile</IonFabButton>
      <IonFabButton>Buddies</IonFabButton>
      <IonFabButton>Trips</IonFabButton>
    </IonFabList>
  </IonFab>
);

export default Navbar;
