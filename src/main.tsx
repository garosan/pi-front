import React from 'react';
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app';
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import NotFoundPage from './pages/NotFoundPage';
import NewAuditForm from './components/NewAuditForm';
// import DistintivoHForm from './components/DistintivoHForm.tsx';
import AuditAccordion from './components/AccordionTest.tsx';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/testing',
    element: <div>Hello world!</div>,
  },
  {
    path: '/new-audit/distintivo-h',
    element: <NewAuditForm />,
  },
  {
    path: '/new-audit/regular',
    element: <NewAuditForm />,
  },
  {
    path: '/new-audit/distintivo-h/12345',
    element: <AuditAccordion />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);