import React from 'react';
import { useHistory } from 'react-router-dom';
/* eslint-disable */
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
/* eslint-enable */
import {
  airplane,
  people,
  triangle,
  chatbubbles,
  person,
  home,
} from 'ionicons/icons';

const Navbar = () => {
  const history = useHistory();

  return (
    <IonFab vertical="bottom" horizontal="end">
      <IonFabButton color="light">
        <IonIcon icon={triangle} />
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton
          onClick={() => {
            history.push('/profile');
          }}
        >
          <IonIcon icon={person} />
        </IonFabButton>
        <IonFabButton
          onClick={() => {
            history.push('/buddies');
          }}
        >
          <IonIcon icon={people} />
        </IonFabButton>
        <IonFabButton
          onClick={() => {
            history.push('/chats');
          }}
        >
          <IonIcon icon={chatbubbles} />
        </IonFabButton>
        <IonFabButton
          onClick={() => {
            history.push('/trips');
          }}
        >
          <IonIcon icon={airplane} />
        </IonFabButton>
        <IonFabButton
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
