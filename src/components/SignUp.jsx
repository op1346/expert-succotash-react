import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../Utils/refreshToken';


const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

function Signup() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser', res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <button type="button" class="btn btn-primary" onClick={signIn}>
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default Signup;
