import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Recipe from "../pages/Recipe";
import ProtectedRoute from "./protect";
import Categories from "../pages/Category";
import CategoryAdd from "../pages/Create/Category";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
        // AUTHENTICATED
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/recipes",
                element: <Recipe />
            },
            {
                path: "/categories",
                element: <Categories />
            },
            {
                path: "/category/add",
                element: <CategoryAdd />
            }
        ]
    }
])