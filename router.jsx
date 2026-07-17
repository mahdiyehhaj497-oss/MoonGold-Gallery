import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import PaymentPage from "./src/pages/PaymentPage";
import RingPage from "./src/pages/RingPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<HomePage/>
    },
    {
        path: "/paymentpage",
        element:<PaymentPage/>
    },
    {
        path: "/ring",
        element:<RingPage/>
    }
])

export default routes