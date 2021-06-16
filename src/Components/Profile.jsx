import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonContent,
  IonItem,
  IonHeader,
  IonImg,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

import getUserDetails from '../userDetails.api';

const Profile = ({ user, setUser }) => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
    getUserDetails(user, setUserDetails);
  }, []);

  return (
    <IonContent>
      <IonHeader>
        <h1>Profile</h1>
      </IonHeader>

      <IonItem>
        {'User: '}
        {userDetails.name}
      </IonItem>

      <IonImg src={userDetails.avatar_url} alt={userDetails.name} />

      <IonButton expand="block" size="large" color="primary">
        Change Avatar
      </IonButton>
      <br />
      <IonButton expand="block" size="large" color="primary">
        Change Password
      </IonButton>
      <br />
      <IonButton expand="block" size="large" color="secondary">
        Archived Trips
      </IonButton>
      <br />
      <IonButton
        expand="block"
        size="large"
        color="secondary"
        onClick={() => {
          setUser(null);
          history.push('/');
        }}
      >
        Sign Out
      </IonButton>
    </IonContent>
  );
};
export default Profile;
