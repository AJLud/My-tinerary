import { React } from 'react';
import { IonItem, IonInput, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

/* eslint-disable */
const SignIn = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  return (
    <>
      <Link to="/signup">
        <IonButton>Sign up</IonButton>
      </Link>
      <IonItem>
        <IonInput type="text" placeholder=" ...Name">
          Enter Name
        </IonInput>
      </IonItem>
      <IonItem>
        <IonInput type="text" placeholder=" ...Email">
          Enter Email
        </IonInput>
      </IonItem>
    </>
  );
  /* eslint-enable */
};
export default SignIn;
