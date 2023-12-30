import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main.jsx';
import Project from './Pages/Projects/Project.jsx';
import AddProject from './Pages/AddProject/AddProject.jsx';
import Details from './Pages/DetailsPage/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element:<Project/>
      },
      {
        path: '/add',
        element: <AddProject/>
      },
      {
        path: '/details/:id',
        element: <Details/>,
        loader: async({params}) => await fetch(`http://localhost:5001/project/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
