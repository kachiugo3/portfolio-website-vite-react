import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  About,
  Blogs,
  Contact,
  Projects,
  SharedLayout,
  Blog,
  Error,
} from "./pages";
import { loader } from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
        loader: loader,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
