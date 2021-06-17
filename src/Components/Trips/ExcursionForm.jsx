import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
  IonCard,
  IonHeader,
  IonContent,
  IonInput,
} from '@ionic/react';

import postExcursion from '../../api/postExcursion.api';
import BackButton from '../BackButton';
import Error from '../Error';

const FormPage = () => {
  const [isPosted, setIsPosted] = useState(false);
  const history = useHistory();
  const tripId = useParams();
  const [isError, setIsError] = useState({});

  const [newExcursion, setNewExcursion] = useState({
    name: '',
    address: '',
    date: '',
    cost: '',
  });

  const newDate = (date) => new Date(date).getTime() / 1000;

  useEffect(() => {
    if (isPosted) {
      setNewExcursion({
        name: '',
        address: '',
        date: '',
        cost: '',
      });
      history.push(`/trips/${tripId.tripId}/excursions`);
    }
  }, [isPosted, history, tripId.tripId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = newDate(newExcursion.date);
    newExcursion.date = {
      seconds: date,
      nanoseconds: 0,
    };

    postExcursion(newExcursion, tripId)
      .then(() => {
        setIsPosted(true);
      })
      .catch((err) => setIsError({ status: true, message: err }));
  };

  if (isError.status) return <Error isError={isError} />;
  return (
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        Excursion
      </IonHeader>

      <form onSubmit={handleSubmit}>
        <IonCard>
          <IonList>
            <IonCardTitle color="danger">Name:</IonCardTitle>
            <IonItem>
              <IonInput
                type="text"
                color="danger"
                required
                placeholder="..."
                value={newExcursion.name}
                onIonChange={(event) => {
                  setNewExcursion((currExcursion) => {
                    const copyExcursion = { ...currExcursion };
                    copyExcursion.name = event.target.value;
                    return copyExcursion;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Date:</IonCardTitle>
            <IonItem>
              <IonInput
                color="danger"
                type="date"
                required
                value={newExcursion.date}
                onIonChange={(event) => {
                  setNewExcursion((currExcursion) => {
                    const copyExcursion = { ...currExcursion };
                    copyExcursion.date = event.target.value;
                    return copyExcursion;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Budget:</IonCardTitle>
            <IonItem>
              <IonInput
                type="text"
                color="danger"
                placeholder="£ / $ / €"
                value={newExcursion.cost}
                onIonChange={(event) => {
                  setNewExcursion((currExcursion) => {
                    const copyExcursion = { ...currExcursion };
                    copyExcursion.cost = event.target.value;
                    return copyExcursion;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Where:</IonCardTitle>

            <IonInput
              type="text"
              value={newExcursion.address}
              onIonChange={(event) => {
                setNewExcursion((currExcursion) => {
                  const copyExcursion = { ...currExcursion };
                  copyExcursion.address = event.target.value;
                  return copyExcursion;
                });
              }}
            />
          </IonList>
        </IonCard>
        <IonButton
          type="submit"
          size="large"
          expand="block"
          color="secondary"
          className="orange-button"
        >
          Add Details
        </IonButton>
      </form>

      <IonButton
        size="large"
        expand="block"
        color="primary"
        className="blue-button"
        onClick={() => history.go(-1)}
      >
        Cancel
      </IonButton>
    </IonContent>
  );
};

export default FormPage;
