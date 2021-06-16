import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonCard, IonCardHeader, IonHeader } from '@ionic/react';
import Loading from './Loading';
import getTripsByUser from '../api/api';
import BackButton from './BackButton';

const ChatList = ({ user }) => {
  const history = useHistory();
  const [userTrips, setUserTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTripsByUser(user).then((trips) => {
      setUserTrips(trips);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div>
      <BackButton />
      <IonHeader>
        <h1>Trip Chats</h1>
      </IonHeader>
      {userTrips.map((trip) => (
        <IonCard
          key={trip.tripId}
          color="primary"
          onClick={() => history.push(`/trips/${trip.tripId}/chat`)}
        >
          <IonCardHeader>
            <h2>{trip.trip_name}</h2>
          </IonCardHeader>
        </IonCard>
      ))}
    </div>
  );
};

export default ChatList;
