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
// import BackButton from './BackButton';

const Profile = ({ user, setUser }) => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState('');
  useEffect(() => {
    getUserDetails(user, setUserDetails);
  }, []);

  return (
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        Profile
      </IonHeader>
      <IonItem>
        {'User: '}
        {userDetails.name}
      </IonItem>

      <IonImg src={userDetails.avatar_url} alt={userDetails.name} />
      <IonButton expand="block" size="large" color="primary">
        Change Avatar
      </IonButton>
      <IonButton expand="block" size="large" color="primary">
        Change Password
      </IonButton>
      <IonButton expand="block" size="large" color="secondary">
        Archived Trips
      </IonButton>
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
