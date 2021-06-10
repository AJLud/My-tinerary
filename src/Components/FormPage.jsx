import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonItemDivider,
  IonInput,
  IonButton,
} from '@ionic/react';

const FormPage = () => (
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
      <IonButton color="success">
        <Link to="/form">Submit</Link>
      </IonButton>
    </IonList>
    <IonButton color="danger">
      <Link to="/trips/">Back to Trips</Link>
    </IonButton>
  </>
);

export default FormPage;
