import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonCard,
  IonContent,
  IonCardHeader,
  IonButton,
  IonHeader,
  IonIcon,
} from '@ionic/react';
/* eslint-disable */
import { chatbubbles } from 'ionicons/icons';
import Loading from './Loading';
import getTripsByUser from '../api/api';
import BackButton from './BackButton';

const ChatList = ({ user }) => {
  const history = useHistory();
  const [userTrips, setUserTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTripsByUser(user, setUserTrips);
    setIsLoading(false);
  }, []);
  if (isLoading) return <Loading />;

  return (
    <IonContent overflow-scroll="true">
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        Trip Chats {'  '}
        <IonIcon icon={chatbubbles}></IonIcon>
      </IonHeader>
      <IonButton
        size="large"
        expand="block"
        color="secondary"
        onClick={() => {
          history.push('new-trip');
        }}
      >
        Start new Chat
      </IonButton>
      {userTrips.map((trip) => (
        <IonCard
          key={trip.tripId}
          color="primary"
          onClick={() => history.push(`/trips/${trip.tripId}/chat`)}
        >
          <br />
          <IonCardHeader>
            <h2>{trip.trip_name}</h2>
          </IonCardHeader>
        </IonCard>
      ))}
    </IonContent>
  );
};
export default ChatList;
