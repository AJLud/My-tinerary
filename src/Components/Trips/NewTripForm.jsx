import {
  IonInput,
  IonContent,
  IonItem,
  IonItemDivider,
  IonList,
  IonHeader,
  IonButton,
  IonCardSubtitle,
} from '@ionic/react';

/* eslint-disable */
import { React, useState, useContext, useEffect } from 'react';
/* eslint-enable */
import { Redirect, useHistory } from 'react-router-dom';
import postTripByUser from '../../api/postTrips.api';
import UserContext from '../../Contexts/User';
import BackButton from '../BackButton';
import Error from '../Error';

const NewTrip = () => {
  const [isPosted, setIsPosted] = useState(false);
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [isError, setIsError] = useState({});
  const [newTrip, setNewTrip] = useState({
    owner: `${user.username}`,
    trip_name: '',
    destination: '',
    start_date: '',
    end_date: '',
    notes: '',
  });

  /*
- alert user of success
*/

  const newDate = (date) => new Date(date).getTime() / 1000;

  useEffect(() => {
    if (isPosted) {
      setNewTrip({ trip_name: '', destination: '' });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = newDate(newTrip.start_date);
    const endDate = newDate(newTrip.end_date);
    newTrip.start_date = { seconds: startDate, nanoseconds: 0 };
    newTrip.end_date = { seconds: endDate, nanoseconds: 0 };

    postTripByUser(newTrip)
      .then(() => {
        setIsPosted(true);
      })
      .catch((err) => setIsError({ status: true, message: err }));
  };

  if (isError.status) return <Error isError={isError} />;
  if (isPosted) {
    return <Redirect to="/trips" />;
  }
  // isPosted is not changing to true.
  // every other form submission the submit breaks

  return (
    <IonContent>
      <IonHeader className="header plane" class="ion-no-border">
        <BackButton />
        <IonCardSubtitle className="page-head">
          {' '}
          Plan New Trip ⛅
        </IonCardSubtitle>
      </IonHeader>

      <form onSubmit={handleSubmit}>
        <IonList>
          <IonItemDivider>Name your trip</IonItemDivider>
          <IonItem>
            <IonInput
              type="text"
              placeholder="Amazing Holiday 🌞 "
              required
              value={newTrip.trip_name}
              onIonChange={(event) => {
                setNewTrip((currTrip) => {
                  const copyTrip = { ...currTrip };
                  copyTrip.trip_name = event.target.value;
                  return copyTrip;
                });
              }}
            />
          </IonItem>
          <IonItemDivider>Input Start Date</IonItemDivider>
          <IonItem>
            <IonInput
              type="date"
              required
              value={newTrip.start_date}
              onIonChange={(event) => {
                setNewTrip((currTrip) => {
                  const copyTrip = { ...currTrip };
                  copyTrip.start_date = event.target.value;
                  return copyTrip;
                });
              }}
            />
          </IonItem>
          <IonItemDivider>Input End Date</IonItemDivider>
          <IonItem>
            <IonInput
              type="date"
              required
              value={newTrip.end_date}
              onIonChange={(event) => {
                setNewTrip((currTrip) => {
                  const copyTrip = { ...currTrip };
                  copyTrip.end_date = event.target.value;
                  return copyTrip;
                });
              }}
            />
          </IonItem>
          <IonItemDivider>Destination</IonItemDivider>
          <IonItem>
            <IonInput
              type="text"
              placeholder="Input Destination"
              required
              value={newTrip.destination}
              onIonChange={(event) => {
                setNewTrip((currTrip) => {
                  const copyTrip = { ...currTrip };
                  copyTrip.destination = event.target.value;
                  return copyTrip;
                });
              }}
            />
          </IonItem>
          <IonItemDivider>Notes</IonItemDivider>
          <IonItem>
            <IonInput
              type="text"
              placeholder="Notes..."
              value={newTrip.notes}
              onIonChange={(event) => {
                setNewTrip((currTrip) => {
                  const copyTrip = { ...currTrip };
                  copyTrip.notes = event.target.value;
                  return copyTrip;
                });
              }}
            />
          </IonItem>
          <IonButton
            type="submit"
            size="large"
            expand="block"
            color="secondary"
          >
            submit
          </IonButton>
        </IonList>
      </form>
      <IonButton
        size="large"
        expand="block"
        color="primary"
        onClick={() => history.push('/trips')}
      >
        Cancel
      </IonButton>
    </IonContent>
  );
};

export default NewTrip;
