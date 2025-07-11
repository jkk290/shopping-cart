import { createBrowserRouter } from "react-router";
import App from '../../App';
import Homepage from "../pages/Homepage";
import Error from "../pages/Error";
import Shop from "../pages/Shop";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true, element: <Homepage />
            },
            {
                path: '/shop',
                element: <Shop />,
            }
        ]
    },
]);

export default router;