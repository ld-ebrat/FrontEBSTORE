import { RouteObject } from "react-router-dom";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import Home from "./Pages/Home";
import ProtectDashboard from "./Filters/ProtectDashboard";
import PersonalInformation from "./Layout/Account/PersonalInformation";
import AddressInformation from "./Layout/Account/AddressInformation";
import OrderHistory from "./Layout/Account/OrderHistory";
import ChangePassword from "./Layout/Account/ChangePassword";
import Products from "./Pages/Products";

const route: RouteObject[] = [
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/singup",
        element: <SingUp/>
    },
    {
        path:"/account",
        element:<ProtectDashboard/>,
        children: [
            {
                path:"/account/personalInformation",
                element: <PersonalInformation/>
            },
            {
                path:"/account/address",
                element: <AddressInformation/>
            },
            {
                path: "/account/order-active",
                element: <OrderHistory status="Activo"/>
            },
            {
                path: "/account/order-pending",
                element: <OrderHistory status="Pendiente"/>
            },
            {
                path: "/account/order-cancell",
                element: <OrderHistory status="Cancelado"/>
            },
            {
                path:"/account/change-password",
                element: <ChangePassword/>
            }
        ]
    },
    {
        path:"/products/:category",
        element: <Products/>
    }
]

export default route