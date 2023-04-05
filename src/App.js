import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";
import RegistrationPage from "./Pages/Registration";
import Blogs from "./Pages/Blogs";
import BlogCreate from "./Components/BlogCreate";
import UpdateBlog from "./Components/UpdateBlog";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "Blogs",
          element: <Blogs />,
        },
        {
          path: "Login",
          element: <LoginPage />,
        },
        {
          path: "Registration",
          element: <RegistrationPage />,
        },
        {
          path: "create-one",
          element: <BlogCreate />,
        },
        {
          path: "updateBlog/:id",
          element: <UpdateBlog />,
        },
      ],
    },
  ]);

  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
