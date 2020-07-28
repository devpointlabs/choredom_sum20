import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import FamProvider from './providers/FamProvider';
import RewardProvider from './providers/RewardProvider';
import TaskProvider from './providers/TaskProvider';
import { initMiddleware } from 'devise-axios';
import  FamGroupProvider from './providers/FamGroupProvider';
import './index.css'

initMiddleware()

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FamProvider>
        <FamGroupProvider>
          <RewardProvider>
            <TaskProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </TaskProvider>
          </RewardProvider>
        </FamGroupProvider>
      </FamProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);