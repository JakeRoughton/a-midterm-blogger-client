import './App.css';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Blogs from './Pages/BlogsForm';
import Layout from './Layouts/Layout';
import axios from 'axios';

const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {  

  //set up hooks for the state 
  const [blogsList, setBlogList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);


  //load the todo items from the back end 
  useEffect(() => {
    axios.get(`${urlEndPoint}/blogs/all`)
    .then(function (response) {
      console.log(response);
      setBlogList(response.data.blogs);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage 
            blogsList={blogsList} 
            urlEndPoint={urlEndPoint} 
            setShouldRefresh={setShouldRefresh}
          />

        },
        { 
          path: "blogs",
          element: <Blogs urlEndPoint={urlEndPoint} setShouldRefresh={setShouldRefresh}/>
        }
      ]

    }
  ])


  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;