import '@assets/css/antd.css';
import '@assets/css/scrollbar.css';
import '@assets/css/app.css';

import { AppRoutes } from './app-routes';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './report-web-vitals';
import { BrowserRouter } from 'react-router-dom';

async function start() {
  // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <>
    <div className='App'>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
    </>
  );
}

start();

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
