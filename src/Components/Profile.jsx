import React, { useEffect, useState } from 'react';
/* eslint-disable */
import {
  IonButton,
  IonContent,
  IonCardTitle,
  IonHeader,
  IonCard,
} from '@ionic/react';
/* eslint-enable */
import { useHistory } from 'react-router-dom';
import getUserDetails from '../userDetails.api';
import BackButton from './BackButton';

const Profile = ({ user, setUser }) => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState('');
  useEffect(() => {
    getUserDetails(user, setUserDetails);
  }, []);

  return (
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        Profile
      </IonHeader>

      <IonButton
        expand="block"
        size="large"
        color="secondary"
        className="orange-button"
      >
        {userDetails.name}
      </IonButton>

      <div className="homepage-img-container">
        <img
          className="profile-img"
          src={userDetails.avatar_url}
          alt={userDetails.name}
        />
      </div>

      <IonButton
        expand="block"
        size="large"
        color="primary"
        className="blue-button"
      >
        Change Avatar
      </IonButton>

      <IonButton
        expand="block"
        size="large"
        color="primary"
        className="blue-button"
      >
        Change Password
      </IonButton>

      <IonButton
        expand="block"
        size="large"
        color="secondary"
        className="orange-button"
      >
        Archived Trips
      </IonButton>

      <IonButton
        className="orange-button"
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
