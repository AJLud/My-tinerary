import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonItemDivider,
  IonInput,
  IonButton,
} from '@ionic/react';

const FormPage = () => {
  const history = useHistory();
  return (
    <>
      <IonCard>
        <IonCardTitle>Travel Details:</IonCardTitle>
      </IonCard>

      <IonList>
        <IonItemDivider>{'Airport: '}</IonItemDivider>
        <IonItem>
          <IonInput />
        </IonItem>

        <IonItemDivider>{'Flight Number: '}</IonItemDivider>
        <IonItem>
          <IonInput />
        </IonItem>

        <IonItemDivider>{'Flight Time: '}</IonItemDivider>
        <IonItem>
          <IonInput />
        </IonItem>
        <IonButton color="success" onClick={() => history.push('/trips')}>
          Add Details
        </IonButton>
      </IonList>
      <IonButton color="danger" onClick={() => history.push('/trips')}>
        Back
      </IonButton>
    </>
  );
};

export default FormPage;
