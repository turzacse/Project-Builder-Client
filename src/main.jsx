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
import Update from './Pages/UpdatePage/Update.jsx';
import Sample from './Pages/SampleProject/Sample.jsx';
import Error from './Pages/ErrorPage/Error.jsx';

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
        path: '/sample',
        element: <Sample/>
      },
      {
        path: '/details/:id',
        element: <Details/>,
        loader: async({params}) => await fetch(`https://necleo-project-builder.vercel.app/project/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update/>,
        loader: async({params}) => await fetch(`https://necleo-project-builder.vercel.app/project/${params.id}`)
      },
    ]
  },
  {
    path: '*',
    element: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
