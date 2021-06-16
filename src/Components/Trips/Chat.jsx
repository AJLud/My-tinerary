import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  IonCardSubtitle,
  IonCardContent,
  IonCard,
  IonContent,
  IonButton,
} from '@ionic/react';
import getTripById from '../../api/tripById.api';
import BackButton from '../BackButton';
import Loading from '../Loading';

const Chat = ({ user }) => {
  const { tripId } = useParams();
  const history = useHistory();
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
      <IonButton
        onClick={() => {
          history.push(`/trips/${tripId}`);
        }}
      >
        Back To Trip
      </IonButton>
      <IonCardSubtitle className="page-head">
        {currentTrip.trip_name}
      </IonCardSubtitle>
      <IonCard className="other-message">
        <IonCardSubtitle>AlexAlexAlex</IonCardSubtitle>
        <IonCardContent>
          <h2>I&apos;m so pumped for this break!</h2>
        </IonCardContent>
        <IonCardSubtitle>10 May, 11:29</IonCardSubtitle>
      </IonCard>
      <IonCard className="my-message">
        <IonCardSubtitle>{user.username}</IonCardSubtitle>
        <IonCardContent>
          <h2>I know right, bring a brolly though ☂ </h2>
        </IonCardContent>
        <IonCardSubtitle>10 May, 13:45</IonCardSubtitle>
      </IonCard>
      <IonCard className="other-message">
        <IonCardSubtitle>BigDave101</IonCardSubtitle>
        <IonCardContent>
          <h2>Rain rain go away am i right?</h2>
        </IonCardContent>
        <IonCardSubtitle>10 May, 11:29</IonCardSubtitle>
      </IonCard>
      <IonCard className="other-message">
        <IonCardSubtitle>Poonam_1478</IonCardSubtitle>
        <IonCardContent>
          <h2>🤣🤣🤣 </h2>
        </IonCardContent>
        <IonCardSubtitle>10 May, 11:29</IonCardSubtitle>
      </IonCard>
    </IonContent>
  );
};
export default Chat;
