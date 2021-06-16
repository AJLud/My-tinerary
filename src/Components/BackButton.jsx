import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonFabButton, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

const BackButton = () => {
  const history = useHistory();
  return (
    <IonFabButton
      size="small"
      shape="round"
      color="danger"
      onClick={() => {
        history.go(-1);
      }}
    >
      <IonIcon icon={arrowBackOutline} />
    </IonFabButton>
  );
};

export default BackButton;
