import React from 'react';
import { useAuth } from 'oidc-react';

const LoggedIn = () => {
  const auth = useAuth();

  const logout = () => {
    auth.signOut();
    window.location.href = '/';
  }

  if (auth && auth.userData) {
    return (
      <div>
        <strong>Logged in! 🎉</strong><br />
        <button onClick={logout}>Log out!</button>
      </div>
    );
  }
  return <div>Not logged in! Try to refresh to be redirected.</div>;
};

export default LoggedIn;
