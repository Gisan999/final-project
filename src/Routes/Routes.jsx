import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import EmployeeJoin from "../Components/Registration/EmployeeJoin";
import AdminJoin from "../Components/Registration/AdminJoin";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/registration",
                element: <Registration/>
            },
            {
                path: "/employeeJoin",
                element: <EmployeeJoin/>
            },
            {
                path: "/adminJoin",
                element: <AdminJoin/>
            }
        ]
    }
])

export default Routes;