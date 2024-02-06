import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Dashboard from './pages/dashboard/dashboard';
import DataTable from './components/DataTable/DataTable';

const router = createBrowserRouter(
  [
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/option-five",
      element: <div>Option five content will be here</div>,
    },
    {
      path: "/option-six",
      element: <DataTable />,
    },
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
