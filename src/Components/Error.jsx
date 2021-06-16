import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton } from '@ionic/react';

const Error = ({ isError }) => {
  const history = useHistory();
  return (
    <>
      <h1>Oops Something Went Wrong</h1>
      {isError.message}
      <IonButton
        onClick={() => {
          history.push('/');
        }}
      >
        Go Home
      </IonButton>
    </>
  );
};

export default Error;
