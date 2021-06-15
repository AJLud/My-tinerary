import { useContext, React } from 'react';
import UserContext from '../../Contexts/User';
import SignIn from './SignIn';

const RequireLogin = (children) => {
  const { user } = useContext(UserContext);
  return user.username ? children : <SignIn />;
};

export default RequireLogin;
