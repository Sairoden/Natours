// REACT & LIBRARIES
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import { AppLayout, Home } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
