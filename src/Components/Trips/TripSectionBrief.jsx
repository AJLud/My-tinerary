import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCardHeader,
} from '@ionic/react';

const TripSectionBrief = ({ section, tripId }) => {
  const history = useHistory();

  return (
    <IonCard
      color="light"
      onClick={() => {
        history.push(`/trips/${tripId}/${section}`);
      }}
    >
      <IonCardHeader>
        <IonCardTitle>{section}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardSubtitle>
          <h5>
            {'Click here to access all your '}
            {section}
            {' details'}
          </h5>
        </IonCardSubtitle>
      </IonCardContent>
    </IonCard>
  );
};

export default TripSectionBrief;
