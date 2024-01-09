import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import AddUsers from './Pages/AddUsers/AddUsers.jsx';
import DashBoard from './Pages/DashBoard/DashBoard.jsx';
import Home from './Pages/Home/Home.jsx';
import Details from './Pages/Details/Details.jsx';

// Create a client
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/add",
        element: <AddUsers />
      },
      {
        path: "/dashboard",
        element: <DashBoard />
      },
      {
        path: '/details/:id',
        element: <Details />,
        loader: ({ params }) => fetch(`http://localhost:5000/customer/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  </React.StrictMode>,
)
