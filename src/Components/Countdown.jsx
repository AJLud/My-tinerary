import React from 'react';
import { IonCardSubtitle } from '@ionic/react';

import * as utils from '../utils/utils';

const Countdown = ({ trip }) => {
  const tripStartDate = trip.start_date.seconds;
  const tripEndDate = trip.end_date.seconds;
  const currDate = Math.floor(Date.now() / 1000);
  const timeElapsed = utils.dateDifference(
    currDate,
    tripStartDate,
    tripEndDate,
  );

  return (
    <IonCardSubtitle>
      <h5>{utils.countdown(timeElapsed)}</h5>
    </IonCardSubtitle>
  );
};

export default Countdown;
