import React from 'react';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonItemDivider,
  IonInput,
} from '@ionic/react';

const FormPage = () => (
  <>
    <IonCard>
      <IonCardTitle>FORM</IonCardTitle>
    </IonCard>

    <IonList>
      <IonItemDivider>Default Input with Placeholder</IonItemDivider>
      <IonItem>
        <IonInput placeholder="Enter Input">I am an input</IonInput>
      </IonItem>

      <IonItemDivider>
        Input with clear button when there is a value
      </IonItemDivider>
      <IonItem>
        <IonInput placeholder="Enter Input">I am an input</IonInput>
      </IonItem>

      <IonItemDivider>Number type input</IonItemDivider>
      <IonItem>
        <IonInput type="number" placeholder="Enter Number">
          I am an input
        </IonInput>
      </IonItem>
    </IonList>
  </>
);

export default FormPage;
