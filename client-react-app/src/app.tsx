import '@assets/css/antd.css';
import '@assets/css/scrollbar.css';
import '@assets/css/app.css';

import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'oidc-react';

import reportWebVitals from './report-web-vitals';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app-routes';
import { env } from '@infra/env';

const oidcConfig = {
  onSignIn: async (user: any) => {
    // alert('You just signed in, congratz! Check out the console!');
    console.log(user);
    window.location.href = '/';
  },
  authority: env.OIDC.AUTHORITY,
  clientId: env.OIDC.CLIENT_ID,
  clientSecret: env.OIDC.CLIENT_SECRET,
  scope: env.OIDC.SCOPE,
  response_type: env.OIDC.RESPONSE_TYPE,
  redirectUri: env.OIDC.REDIRECT_URI,
  silent_redirect_uri: env.OIDC.SILENT_REDIRECT_URI,
  post_logout_redirect_uri: env.OIDC.LOGOUT_REDIRECT_URI,
};

async function start() {
  // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <>
    <AuthProvider {...oidcConfig}>
    <div className='App'>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
    </AuthProvider>
    </>
  );
}

start();

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
