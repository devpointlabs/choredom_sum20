import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import FamProvider from './providers/FamProvider';
import RewardProvider from './providers/RewardProvider';
import TaskProvider from './providers/TaskProvider';
import { initMiddleware } from 'devise-axios';

initMiddleware()

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FamProvider>
        <RewardProvider>
          <TaskProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </TaskProvider>
        </RewardProvider>
      </FamProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);