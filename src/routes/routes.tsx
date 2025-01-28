import App from "@/App";
import ContactUs from "@/components/ContactUs";
import Main from "@/Layout";
import About from "@/pages/About";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
