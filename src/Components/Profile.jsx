import React, { useEffect, useState } from 'react';

import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonListHeader,
  IonImg,
} from '@ionic/react';

import { Link } from 'react-router-dom';
import getUserDetails from '../userDetails.api';
import BackButton from './BackButton';

const Profile = ({ user, setUser }) => {
  const [userDetails, setUserDetails] = useState('');
  useEffect(() => {
    getUserDetails(user, setUserDetails);
  }, []);

  return (
    <IonContent>
      <BackButton />
      <IonListHeader lines="full">
        <IonLabel>
          <h1>Profile</h1>
        </IonLabel>
        <Link to="/">
          <IonButton
            onClick={() => {
              setUser(null);
            }}
          >
            Sign Out
          </IonButton>
        </Link>
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
