import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AppProvider } from '@shopify/polaris';
import { Provider } from 'react-redux';
import '@shopify/polaris/build/esm/styles.css';

import { store } from './app/store';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <AppProvider i18n={{}}>
        <App />
      </AppProvider>
    </Provider>
  </StrictMode>
);
