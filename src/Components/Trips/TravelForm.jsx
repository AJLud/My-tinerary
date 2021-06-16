import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
  IonItemDivider,
  IonCard,
  IonContent,
  IonInput,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import postTravelDetails from '../../api/postTravel';
import BackButton from '../BackButton';
import Error from '../Error';

const TravelForm = () => {
  const [isPosted, setIsPosted] = useState(false);
  const history = useHistory();
  const tripId = useParams();
  const [isError, setIsError] = useState(false);

  const [newTravel, setNewTravel] = useState({
    cost: '',
    direction: '',
    leavingFrom: '',
    arrivingAt: '',
    leavingDate: '',
    transport: '',
  });

  const newDate = (date) => new Date(date).getTime() / 1000;

  useEffect(() => {
    let mounted = true;
    if (isPosted && mounted) {
      history.push(`/trips/${tripId.tripId}/travel`);
    }

    return function cleanup() {
      mounted = false;
    };
  }, [isPosted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = newDate(newTravel.leavingDate);
    newTravel.leavingDate = {
      seconds: date,
      nanoseconds: 0,
    };

    postTravelDetails(newTravel, tripId)
      .then(() => {
        setIsPosted(true);
      })
      .catch((err) => setIsError({ status: true, message: err }));
  };

  if (isError.status) return <Error isError={isError} />;
  return (
    <IonContent>
      <BackButton />
      <IonButton
        onClick={() => {
          history.push(`/trips/${tripId.tripId}`);
        }}
      >
        Back To Trip
      </IonButton>
      <form onSubmit={handleSubmit}>
        <IonCard>
          <IonList>
            <IonItem>
              <IonCardTitle>Travel Plans</IonCardTitle>
            </IonItem>
            <IonItemDivider>Direction: </IonItemDivider>
            <IonSelect
              value={newTravel.direction}
              placeholder="Select One"
              onIonChange={(event) => {
                setNewTravel((currTravel) => {
                  const copyTravel = { ...currTravel };
                  copyTravel.direction = event.target.value;
                  return copyTravel;
                });
              }}
            >
              <IonSelectOption value="Outbound">Outbound</IonSelectOption>
              <IonSelectOption value="Inbound">Inbound</IonSelectOption>
            </IonSelect>
            <IonItemDivider>Date: </IonItemDivider>
            <IonItem>
              <IonInput
                type="date"
                required
                value={newTravel.leavingDate}
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.leavingDate = event.target.value;
                    return copyTravel;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Leaving From: </IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                required
                value={newTravel.leavingFrom}
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.leavingFrom = event.target.value;
                    return copyTravel;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Arriving At:</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                required
                value={newTravel.arrivingAt}
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.arrivingAt = event.target.value;
                    return copyTravel;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Cost:</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                required
                value={newTravel.cost}
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.cost = event.target.value;
                    return copyTravel;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Transport:</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                required
                value={newTravel.transport}
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.transport = event.target.value;
                    return copyTravel;
                  });
                }}
              />
            </IonItem>
          </IonList>
        </IonCard>
        <IonButton expand="block" color="success" type="submit">
          Add Details
        </IonButton>
      </form>
      <IonButton expand="block" color="danger" onClick={() => history.go(-1)}>
        Cancel
      </IonButton>
    </IonContent>
  );
};

export default TravelForm;
