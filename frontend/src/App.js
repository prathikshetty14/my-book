import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import Form from './components/Form';
import Result from "./components/Result";
import Error from "./components/Error";
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Navbar />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Form />
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
