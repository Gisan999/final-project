import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import EmployeeJoin from "../Components/Registration/EmployeeJoin";
import AdminJoin from "../Components/Registration/AdminJoin";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import About from "../Components/About/About";
import PaymentSection from "../Components/PaymentSection/PaymentSection";
import AddAssetPage from "../Components/AddAssetPage/AddAssetPage";
import AdminRoute from "./AdminRoute";
import AssetList from "../Components/AssetList/AssetList";
import AddAnEmployeePage from "../Components/AddAnEmployeePage/AddAnEmployeePage";
import MyEmployeeList from "../Components/MyEmployeeList/MyEmployeeList";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/employeeJoin",
                element: <EmployeeJoin />
            },
            {
                path: "/adminJoin",
                element: <AdminJoin />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/payment",
                element: <PaymentSection />
            },
            // Admin routes
            {
                path: "/addAsset",
                element: <AdminRoute><AddAssetPage /></AdminRoute>
            },
            {
                path: "/assetList",
                element: <AdminRoute><AssetList /></AdminRoute>
            },
            {
                path: "/addEmployee",
                element: <AdminRoute><AddAnEmployeePage /></AdminRoute>
            },
            {
                path: "/myEmployee",
                element: <AdminRoute><MyEmployeeList /></AdminRoute>
            }

        ]
    }
])

export default Routes;