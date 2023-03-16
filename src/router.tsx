import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CharacterDetails from "./src/features/Characters/components/CharacterDetails";
import CharactersList from "./src/features/Characters/components/CharactersList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/characters",
        children: [
          {
            path: "/characters",
            element: <CharactersList />,
          },
          {
            path: "/characters/:id",
            element: <CharacterDetails />,
          },
        ],
      },
    ],
  },
]);
