import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
  IonItemDivider,
  IonCard,
  IonHeader,
  IonContent,
  IonInput,
} from '@ionic/react';

import postAccommodationDetails from '../../api/postAccom';
import BackButton from '../BackButton';
import Error from '../Error';

const AccommodationForm = () => {
  const [isPosted, setIsPosted] = useState(false);
  const history = useHistory();
  const tripId = useParams();
  const [isError, setIsError] = useState({});

  const [newAccommodation, setNewAccommodation] = useState({
    days: '',
    hotel_name: '',
    check_in: '',
    notes: '',
  });

  const newDate = (date) => new Date(date).getTime() / 1000;

  useEffect(() => {
    let mounted = true;
    if (isPosted && mounted) {
      history.push(`/trips/${tripId.tripId}/accommodation`);
    }

    return function cleanup() {
      mounted = false;
    };
  }, [isPosted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkIn = newDate(newAccommodation.check_in);
    newAccommodation.check_in = {
      seconds: checkIn,
      nanoseconds: 0,
    };
    postAccommodationDetails(newAccommodation, tripId)
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
        Accommodation
      </IonHeader>

      {/* <IonButton
        onClick={() => {
          history.push(`/trips/${tripId.tripId}`);
        }}
      >
        Back To Trip
      </IonButton> */}
      <form onSubmit={handleSubmit}>
        <IonCard>
          <IonList>
            <IonItem>
              <IonCardTitle>Add Plans</IonCardTitle>
            </IonItem>
            <IonItemDivider>Venue Name:</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                placeholder="..."
                required
                value={newAccommodation.hotel_name}
                onIonChange={(event) => {
                  setNewAccommodation((currAccommodation) => {
                    const copyAccommodation = { ...currAccommodation };
                    copyAccommodation.hotel_name = event.target.value;
                    return copyAccommodation;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Check-In Date</IonItemDivider>
            <IonItem>
              <IonInput
                type="date"
                required
                value={newAccommodation.check_in}
                onIonChange={(event) => {
                  setNewAccommodation((currAccommodation) => {
                    const copyAccommodation = { ...currAccommodation };
                    copyAccommodation.check_in = event.target.value;
                    return copyAccommodation;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Number of nights </IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                required
                value={newAccommodation.days}
                placeholder="..."
                onIonChange={(event) => {
                  setNewAccommodation((currAccommodation) => {
                    const copyAccommodation = { ...currAccommodation };
                    copyAccommodation.days = event.target.value;
                    return copyAccommodation;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Notes:</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                value={newAccommodation.notes}
                placeholder="..."
                onIonChange={(event) => {
                  setNewAccommodation((currAccommodation) => {
                    const copyAccommodation = { ...currAccommodation };
                    copyAccommodation.notes = event.target.value;
                    return copyAccommodation;
                  });
                }}
              />
            </IonItem>
          </IonList>
        </IonCard>
        <IonButton size="large" expand="block" type="submit" color="secondary">
          Add Details
        </IonButton>
      </form>

      <IonButton
        size="large"
        expand="block"
        color="primary"
        onClick={() => history.go(-1)}
      >
        Cancel
      </IonButton>
    </IonContent>
  );
};

export default AccommodationForm;
