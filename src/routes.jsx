import App from "./App.jsx";
import Work from "./components/pages/work/Work.jsx";
import Home from "./components/pages/home/Home.jsx";
import Studio from "./components/pages/studio/Studio.jsx";
import Contact from "./components/pages/contact/Contact.jsx";
import {
  createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App  Component={Home} />,
  },
  {
    path: "/work",
    element: <App Component={Work} />,
  },
  {
    path: "/studio",
    element: <App Component={Studio} />,
  },
  {
    path: "/contact",
    element: <App Component={Contact} />,
  }
]);

export default router