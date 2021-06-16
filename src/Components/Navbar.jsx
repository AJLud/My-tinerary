import React from 'react';
import { useHistory } from 'react-router-dom';
/* eslint-disable */
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
/* eslint-enable */
import {
  airplane,
  people,
  arrowUpOutline,
  chatbubbles,
  person,
  home,
} from 'ionicons/icons';

const Navbar = () => {
  const history = useHistory();

  return (
    <IonFab vertical="bottom" horizontal="end">
      <IonFabButton color="danger">
        <IonIcon icon={arrowUpOutline} />
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton
          color="danger"
          onClick={() => {
            history.push('/profile');
          }}
        >
          <IonIcon icon={person} />
        </IonFabButton>
        <IonFabButton
          color="danger"
          onClick={() => {
            history.push('/buddies');
          }}
        >
          <IonIcon icon={people} />
        </IonFabButton>
        <IonFabButton
          color="danger"
          onClick={() => {
            history.push('/chats');
          }}
        >
          <IonIcon icon={chatbubbles} />
        </IonFabButton>
        <IonFabButton
          color="danger"
          onClick={() => {
            history.push('/trips');
          }}
        >
          <IonIcon icon={airplane} />
        </IonFabButton>
        <IonFabButton
          color="danger"
          onClick={() => {
            history.push('/');
          }}
        >
          <IonIcon icon={home} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default Navbar;
