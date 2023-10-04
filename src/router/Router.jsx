import { createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../page/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    children : [
        {
            path: "/",
            element: <Home/>
        }
    ]

  },
]);
