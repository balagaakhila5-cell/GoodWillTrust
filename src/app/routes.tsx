import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Activities } from "./pages/activities";
import { Donate } from "./pages/donate";
import { Gallery } from "./pages/gallery";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "activities", Component: Activities },
      { path: "donate", Component: Donate },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);