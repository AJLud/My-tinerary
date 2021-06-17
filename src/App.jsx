import { React, useState } from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Trips from './Components/Trips/TripList';
import Profile from './Components/Profile';
import ProfileSettings from './Components/ProfileSettings';
import Trip from './Components/Trips/IndividualTrip';
import NewTrip from './Components/Trips/NewTripForm';
import Buddies from './Components/Buddies';
import Navbar from './Components/Navbar';
import SignIn from './Components/LogIn/SignIn';
import AccomodationForm from './Components/Trips/AccommodationForm';
import TravelForm from './Components/Trips/TravelForm';
import ExcursionForm from './Components/Trips/ExcursionForm';
import SignUp from './Components/LogIn/SignUp';
import Home from './Components/Homepage';
import AccommodationDetails from './Components/Trips/AccommodationList';
import ExcursionList from './Components/Trips/ExcursionList';
import TravelList from './Components/Trips/TravelList';
import TravelNotes from './Components/Trips/TravelNotes';
import ArchivedTrips from './Components/Trips/ArchivedTrips';
import Error from './Components/Error';
import UserContext from './Contexts/User';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/app.css';

const App = () => {
  const [user, setUser] = useState({ username: 'Bex123' });

  const SignInSignUpView = () => (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact>
            <SignIn setUser={setUser} />
          </Route>
          <Route>
            <SignUp path="/signup" exact />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );

  const AuthUserView = () => (
    <IonApp>
      <UserContext.Provider value={{ user, setUser }}>
        <IonReactRouter>
          <Navbar />
          <IonRouterOutlet id="main">
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/trips" exact>
              <Trips user={user} />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/trips/:tripId/accommodation/form" exact>
              <AccomodationForm />
            </Route>
            <Route path="/trips/:tripId/accommodation" exact>
              <AccommodationDetails />
            </Route>
            <Route path="/trips/:tripId/excursions/form">
              <ExcursionForm />
            </Route>
            <Route path="/trips/:tripId/excursions" exact>
              <ExcursionList />
            </Route>
            <Route path="/trips/:tripId/travel/form" exact>
              <TravelForm />
            </Route>
            <Route path="/trips/:tripId/travel" exact>
              <TravelList />
            </Route>
            <Route path="/trips/:tripId" exact>
              <Trip />
            </Route>
            <Route path="/new-trip" exact>
              <NewTrip />
            </Route>
            <Route path="/profile" exact>
              <Profile user={user} setUser={setUser} />
            </Route>
            <Route path="/profile/settings" exact>
              <ProfileSettings />
            </Route>
            <Route path="/buddies" exact>
              <Buddies user={user} />
            </Route>
            <Route path="/trips/:tripId/Notes" exact>
              <TravelNotes />
            </Route>
            <Route path="/archived-trips">
              <ArchivedTrips />
            </Route>
            <Route path="/404" exact>
              <Error />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </UserContext.Provider>
    </IonApp>
  );

  if (user) {
    return <AuthUserView />;
  }
  return <SignInSignUpView />;
};

export default App;
