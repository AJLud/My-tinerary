import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonListHeader,
  IonImg,
} from '@ionic/react';

import getUserDetails from '../userDetails.api';

const Profile = ({ user }) => {
  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
    getUserDetails(user, setUserDetails);
  }, []);

  return (
    <IonContent>
      <IonListHeader lines="full">
        <IonLabel>
          <h1>Profile</h1>
        </IonLabel>
        <IonButton>Sign Out</IonButton>
      </IonListHeader>
      <IonItem>
        {'User: '}
        {userDetails.name}
      </IonItem>

      <IonImg src={userDetails.avatar_url} alt={userDetails.name} />

      <IonButton expand="full" size="large" color="warning">
        Change Avatar
      </IonButton>
      <br />
      <IonButton expand="full" size="large" color="warning">
        Change Password
      </IonButton>
      <br />
      <IonButton expand="full" size="large" color="secondary">
        Archived Trips
      </IonButton>
      <br />
      <IonButton expand="full" size="large" color="secondary">
        Settings
      </IonButton>
    </IonContent>
  );
};
export default Profile;
