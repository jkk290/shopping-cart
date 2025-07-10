import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage";
import Error from "../pages/Error";
import Shop from "../pages/Shop";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <Error />,
    },
    {
        path: '/shop',
        element: <Shop />,
    },
]);

export default router;