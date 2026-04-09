import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import GlobalInternships from "./pages/GlobalInternships.tsx";
import QuestQuiz from "./pages/QuestQuiz.tsx";
import InternPortal from "./pages/InternPortal.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/global-internships",
    element: <GlobalInternships />,
  },
  {
    path: "/quest-quiz",
    element: <QuestQuiz />,
  },
  {
    path: "/intern-portal",
    element: <InternPortal />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
