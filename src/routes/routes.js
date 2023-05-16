import Dashboard from "../Pages/Dashboard";
import Products from "../Pages/Market/Products";
import {Category, CreateCategory} from "../Pages/Market/Category";
import EditCategory from "../Pages/Market/Category/EditCategory";

export const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/market/products', element: <Products /> },
    { path: '/market/category', element: <Category /> },
    { path: '/market/category/create', element: <CreateCategory /> },
    { path: '/market/category/edit/:catId', element: <EditCategory /> },

]