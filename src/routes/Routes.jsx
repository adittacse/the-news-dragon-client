import {createBrowserRouter, Navigate} from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import Category from "../pages/Home/Category/Category.jsx";
import NewsLayout from "../Layout/NewsLayout.jsx";
import News from "../pages/News/News.jsx";
import LoginLayout from "../Layout/LoginLayout.jsx";
import Login from "../pages/Login/Login/Login.jsx";
import Register from "../pages/Login/Register/Register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="category/0"></Navigate>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [
            {
                path: ":id",
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
]);

export default router;