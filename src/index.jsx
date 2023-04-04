import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './routes/ErrorPage';
import { Quiz } from './routes/Quiz';
import { Results } from './routes/Results';
import { MainPage } from './routes/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'results',
        element: <Results />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
