import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IonCardSubtitle, IonContent } from '@ionic/react';
import getTripById from '../../api/tripById.api';
import BackButton from '../BackButton';
import Loading from '../Loading';

const Chat = () => {
  const { tripId } = useParams();
  const [currentTrip, setCurrentTrip] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTripById(tripId).then((specificTrip) => {
      setCurrentTrip(specificTrip);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;
  return (
    <IonContent>
      <BackButton />
      <IonCardSubtitle className="page-head">
        {currentTrip.trip_name}
      </IonCardSubtitle>
    </IonContent>
  );
};
export default Chat;
