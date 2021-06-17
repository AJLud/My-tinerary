import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  IonCardSubtitle,
  IonCardContent,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonChip,
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
    let mounted = true;
    if (mounted) {
      getTripById(tripId)
        .then((specificTrip) => {
          setCurrentTrip(specificTrip);
        })
        .then(() => {
          setIsLoading(false);
        });
    }
    return function cleanup() {
      mounted = false;
    };
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
      <IonChip className="other-message">
        <IonCardSubtitle className="other-subtitle">
          AlexAlexAlex
        </IonCardSubtitle>
        <IonCardContent>
          <h2>I&apos;m so pumped for this break!</h2>
        </IonCardContent>
        <IonCardSubtitle className="other-subtitle">
          10 May, 11:29
        </IonCardSubtitle>
      </IonChip>
      <IonChip className="my-message">
        <IonCardSubtitle>{user.username}</IonCardSubtitle>
        <IonCardContent>
          <h2>I know right, bring a brolly though ☂ </h2>
        </IonCardContent>
        <IonCardSubtitle>10 May, 13:45</IonCardSubtitle>
      </IonChip>
      <IonChip className="other-message">
        <IonCardSubtitle className="other-subtitle">BigDave101</IonCardSubtitle>
        <IonCardContent>
          <h2>Rain rain go away am i right?</h2>
        </IonCardContent>
        <IonCardSubtitle className="other-subtitle">
          10 May, 11:29
        </IonCardSubtitle>
      </IonChip>
      <IonChip className="other-message">
        <IonCardSubtitle className="other-subtitle">
          Poonam_1478
        </IonCardSubtitle>
        <IonCardContent>
          <h2>🤣🤣🤣 </h2>
        </IonCardContent>
        <IonCardSubtitle className="other-subtitle">
          {' '}
          10 May, 11:29
        </IonCardSubtitle>
      </IonChip>
      <form>
        <IonItem color="dark">
          <IonInput type="text" />
        </IonItem>
        <IonButton>Send</IonButton>
      </form>
    </IonContent>
  );
};
export default Chat;
