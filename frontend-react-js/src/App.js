import './App.css';

import NotificationsPage from './pages/NotificationsFeedPage';
import HomeFeedPage from './pages/HomeFeedPage';
import UserFeedPage from './pages/UserFeedPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import RecoverPage from './pages/RecoverPage';
import MessageGroupsPage from './pages/MessageGroupsPage';
import MessageGroupPage from './pages/MessageGroupPage';
import ConfirmationPage from './pages/ConfirmationPage';
import React from 'react';
import process from 'process';
import {Amplify} from 'aws-amplify';
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"; 


Amplify.configure({
  "aws_project_region": process.env.REACT_APP_AWS_PROJECT_REGION,
  "aws_cognito_region": process.env.REACT_APP_AWS_COGNITO_REGION,
  "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.REACT_APP_CLIENT_ID,
  "oauth": {},
  "Auth": {
    // We are not using an Identity Pool
    // identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    "region": process.env.REACT_APP_AWS_COGNITO_REGION,
    "userPoolId": process.env.REACT_APP_AWS_USER_POOLS_ID,
    "userPoolWebClientId": process.env.REACT_APP_CLIENT_ID
  }
});

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <HomeFeedPage />
  },
  {
    path: "/notifications",
    element: <NotificationsPage />
  },
  {
    path: "/@:handle",
    element: <UserFeedPage />
  },
  {
    path: "/messages",
    element: <MessageGroupsPage />
  },
  {
    path: "/messages/@:handle",
    element: <MessageGroupPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/signin",
    element: <SigninPage />
  },
  {
    path: "/confirm",
    element: <ConfirmationPage />
  },
  {
    path: "/forgot",
    element: <RecoverPage />
  }
]);
// console.log(process.env.REACT_APP_AWS_PROJECT_REGION)
// console.log(process.env.REACT_APP_AWS_USER_POOLS_ID)
// console.log(process.env.REACT_APP_CLIENT_ID)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;