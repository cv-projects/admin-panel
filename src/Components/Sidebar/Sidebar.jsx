import React from 'react';
import {NavLink} from "react-router-dom";
import './sidebar.scss';

const Sidebar = () => {

    return (
        <aside className="sidebar">
            <ul className="sidebar--menu">
                <li className="sidebar--item">
                    <NavLink to="/" className="sidebar--link">
                        داشبورد
                    </NavLink>
                </li>
                <li className="sidebar--item">
                    <NavLink to="/market/category" className="sidebar--link">
                        دسته بندی محصولات
                    </NavLink>
                </li>
                <li className="sidebar--item">
                    <NavLink to="/market/products" className="sidebar--link">
                        محصولات
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;