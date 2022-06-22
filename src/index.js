import React from 'react';
import Router from 'Router'
import 'css/app.scss';
import 'css/style.scss';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <Router />
    </StrictMode>
  );

// ReactDOM.render(<Router/>,document.getElementById('root')) 舊寫法