import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetails from "../pages/ItemDetails";
import NotFound from "../pages/NotFound";


export default createBrowserRouter([
    {
        path:'/',
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: "/item/:id",
                element: <ItemDetails />
            },
        ]
    }
]);