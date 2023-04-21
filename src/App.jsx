import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Photos />,
      children: [
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <div>
        <Header />
        <RouterProvider router={router} />
    </div>
  )
}

export default App
