import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CharacterDetails from "./src/features/CharactersList/components/CharacterDetails/CharacterDetails";
import CharactersList from "./src/features/CharactersList/CharactersList";

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
