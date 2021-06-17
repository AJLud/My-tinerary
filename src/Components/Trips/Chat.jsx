import React from 'react';

import {
  IonLabel,
  IonCardContent,
  IonContent,
  IonItem,
  IonTextarea,
  IonButton,
  IonCardTitle,
  IonAvatar,
  IonHeader,
  IonGrid,
  IonFooter,
} from '@ionic/react';
import BackButton from '../BackButton';

const Chat = ({ user }) => {
  const messages = [
    {
      sender: 'CalCosta42',
      text: 'so pumped for this break!',
      time: '  10 May, 11:29',
      sentBy: 'buddy',
      avatar_url:
        'https://ca.slack-edge.com/T01KPE0QGCD-U01R87URQG4-038babb0e908-512',
    },
    {
      sender: `${user.username}`,
      text: 'I know right, bring a brolly ☂ ',
      time: '  10 May, 13:45',
      sentBy: 'me',
      avatar_url:
        'https://ca.slack-edge.com/T01KPE0QGCD-U01R87UE71S-0e600c82397a-512',
    },
    {
      sender: 'Jason890',
      text: 'OMG lost my passport!!',
      time: '  11 May, 09:45',
      sentBy: 'buddy',
      avatar_url:
        'https://ca.slack-edge.com/T01KPE0QGCD-U01R87UE71S-0e600c82397a-512',
    },
    {
      sender: 'CalCosta42',
      text: 'yassss!',
      time: '  11 May, 09:58',
      sentBy: 'buddy',
      avatar_url:
        'https://ca.slack-edge.com/T01KPE0QGCD-U01R87URQG4-038babb0e908-512',
    },
  ];

  return (
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        [Trip Name]
      </IonHeader>

      <IonCardContent>
        <IonCardTitle color="danger">
          {'Dates: '}
          [DATES FROM - DATES TO]
        </IonCardTitle>
        <br />
        <IonCardTitle color="danger">Trip Chat </IonCardTitle>
      </IonCardContent>

      <IonGrid className="chat-messages">
        {messages.map((message) => (
          <>
            <IonItem
              className="message-card"
              color="primary"
              key={message.sender}
            >
              <IonAvatar>
                <img src={message.avatar_url} alt="buddy" />
              </IonAvatar>
              <IonCardContent color="success" className="buddy-name">
                <h2>{message.text}</h2>
              </IonCardContent>
            </IonItem>
            <IonLabel>{message.time}</IonLabel>
          </>
        ))}
        <IonItem className="message-card" color="danger">
          <IonAvatar>
            <img
              src="https://pbs.twimg.com/profile_images/1293174487672696833/dAfMsGZW_400x400.jpg"
              alt="buddy"
            />
          </IonAvatar>
          <IonCardContent color="success" className="chat-right">
            <h2>Obsessed!</h2>
          </IonCardContent>
        </IonItem>
        <IonLabel>11 May, 10:11</IonLabel>
      </IonGrid>

      <IonFooter>
        <form>
          <IonTextarea type="text" placeholder="Say something nice..." />

          <IonButton size="large" expand="block" color="secondary">
            Send
          </IonButton>
        </form>
      </IonFooter>
    </IonContent>
  );
};
export default Chat;
