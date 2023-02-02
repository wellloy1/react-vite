import { useState } from "react";
import "./App.scss";

import {
  BrowserRouter,
  createBrowserRouter,
  createHashRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1>Hello</h1>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
