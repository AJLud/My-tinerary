import React from 'react';
import {
  IonButton,
  IonContent,
  IonLabel,
  IonItem,
  IonAvatar,
  IonHeader,
  IonCardSubtitle,
} from '@ionic/react';
import BackButton from './BackButton';

const Buddies = () => {
  const buddies = [
    {
      avatar_url:
        'https://media-exp1.licdn.com/dms/image/C4D03AQEyCY0Q6f67lw/profile-displayphoto-shrink_800_800/0/1620138622042?e=1629331200&v=beta&t=qfKQgaIJtG59K_GRCulMIB6kt50vMysGlvLWvzBDSoE',
      username: 'Alex99',
    },
    {
      avatar_url:
        'https://ca.slack-edge.com/T01KPE0QGCD-U01R87UE71S-0e600c82397a-512',
      username: 'Bavs2',
    },
    {
      avatar_url:
        'https://pbs.twimg.com/profile_images/1293174487672696833/dAfMsGZW_400x400.jpg',
      username: 'Jason890',
    },
    {
      avatar_url:
        'https://ca.slack-edge.com/T01KPE0QGCD-U01R87URQG4-038babb0e908-512',
      username: 'CalCosta42',
    },
  ];

  return (
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        <IonCardSubtitle className="page-head">Buddies</IonCardSubtitle>
      </IonHeader>

      <IonButton size="large" expand="block" color="secondary">
        Add Buddy
      </IonButton>

      {buddies.map((buddy) => (
        <IonItem color="primary" className="buddy-card" key={buddy.username}>
          <IonAvatar>
            <img src={buddy.avatar_url} alt="buddy" className="buddy-img" />
          </IonAvatar>
          <IonLabel color="success" className="buddy-name">
            <h2>{buddy.username}</h2>
          </IonLabel>
        </IonItem>
      ))}
      <br />
      <IonButton size="medium" expand="block" color="secondary">
        Add By Username
      </IonButton>
      <IonButton size="medium" expand="block" color="secondary">
        Connect to Facebook
      </IonButton>
      <IonButton size="medium" expand="block" color="secondary">
        Connect to Instagram
      </IonButton>
    </IonContent>
  );
};

export default Buddies;
