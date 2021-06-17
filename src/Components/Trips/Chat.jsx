import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  IonCardSubtitle,
  IonCardContent,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonCard,
  IonGrid,
  IonFooter,
} from '@ionic/react';
import BackButton from '../BackButton';

const Chat = ({ user }) => {
  const { tripId } = useParams();
  const history = useHistory();
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
      <IonCardSubtitle className="page-head">London 🎡️💂‍♂️️</IonCardSubtitle>
      <IonGrid className="chat-messages">
        <IonCard className="other-message">
          <IonCardSubtitle className="other-subtitle">
            AlexAlexAlex
          </IonCardSubtitle>
          <IonCardContent>
            <h2>I&apos;m so pumped for this break!</h2>
          </IonCardContent>
          <IonCardSubtitle className="other-subtitle">
            10 May, 11:29
          </IonCardSubtitle>
        </IonCard>
        <IonCard className="my-message">
          <IonCardSubtitle>{user.username}</IonCardSubtitle>
          <IonCardContent>
            <h2>I know right, bring a brolly though ☂ </h2>
          </IonCardContent>
          <IonCardSubtitle>10 May, 13:45</IonCardSubtitle>
        </IonCard>
        <IonCard className="other-message">
          <IonCardSubtitle className="other-subtitle">
            BigDave101
          </IonCardSubtitle>
          <IonCardContent>
            <h2>Rain rain go away am i right?</h2>
          </IonCardContent>
          <IonCardSubtitle className="other-subtitle">
            10 May, 11:29
          </IonCardSubtitle>
        </IonCard>
        <IonCard className="other-message">
          <IonCardSubtitle className="other-subtitle">
            Poonam_1478
          </IonCardSubtitle>
          <IonCardContent>
            <h2>🤣🤣🤣 </h2>
          </IonCardContent>
          <IonCardSubtitle className="other-subtitle">
            10 May, 11:29
          </IonCardSubtitle>
        </IonCard>
      </IonGrid>
      <IonFooter>
        {' '}
        <form>
          <IonItem>
            <IonInput type="text" />
          </IonItem>
        </form>
      </IonFooter>
    </IonContent>
  );
};
export default Chat;
