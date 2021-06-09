import { React, useState } from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Trips from './Components/Trips';
import Profile from './Components/Profile';
import ProfileSettings from './Components/ProfileSettings';
import Trip from './Components/Trip';
import NewTrip from './Components/NewTrip';
import Buddies from './Components/Buddies';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
// import RequireLogin from './Components/RequireLogin';
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

const App = () => {
  const [user, setUser] = useState({ name: 'Elijah' });

  return (
    <IonApp>
      <UserContext.Provider value={{ user }}>
        {/* <RequireLogin> */}
        <IonReactRouter>
          <Route path="/" exact>
            <SignIn user={user} setUser={setUser} />
          </Route>
          <Navbar />
          <IonRouterOutlet id="main">
            <Route path="/trips" exact>
              <Trips />
            </Route>
            <Route path="/trips/archive" exact>
              <Trips />
            </Route>
            <Route path="/trips/:trip_id" exact>
              <Trip />
            </Route>
            <Route path="/trips/new-trip" exact>
              <NewTrip />
            </Route>
            <Route path="/profile" exact>
              <Profile value={{ setUser }} />
            </Route>
            <Route path="/profile/settings" exact>
              <ProfileSettings />
            </Route>
            <Route path="/buddies" exact>
              <Buddies />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
        {/* </RequireLogin> */}
      </UserContext.Provider>
    </IonApp>
  );
};

export default App;