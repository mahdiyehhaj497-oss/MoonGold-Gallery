import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import PaymentPage from "./src/pages/PaymentPage";

const routes = createBrowserRouter([
    {
        path: "./homepage",
        element:<HomePage/>
    },
    {
        path: "./paymentpage",
        element:<PaymentPage/>
    }
])