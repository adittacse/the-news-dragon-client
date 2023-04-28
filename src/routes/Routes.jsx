import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import Category from "../pages/Home/Category/Category.jsx";
import NewsLayout from "../Layout/NewsLayout.jsx";
import News from "../pages/News/News.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
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
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
]);

export default router;