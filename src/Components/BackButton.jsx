import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

const BackButton = () => {
  const history = useHistory();
  return (
    <nav>
      <IonButton
        onClick={() => {
          history.go(-1);
        }}
      >
        <IonIcon icon={arrowBackOutline} />
      </IonButton>
    </nav>
  );
};

export default BackButton;
