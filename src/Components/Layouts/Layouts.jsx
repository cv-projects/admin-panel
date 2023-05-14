import React from 'react';
import Sidebar from "../Sidebar";
import Header from "../Header";
import './layouts.scss';
import {useStateContext} from "../../Contexts/ContextProvider";

const Layouts = ({children}) => {

    const {sidebarActive} = useStateContext();

    return (
        <section className={sidebarActive ? 'layouts is__active' : 'layouts'}>
            <Sidebar/>
            <main className="main">

                <Header/>

                <section className="main--content">
                    {children}
                </section>
            </main>
        </section>
    );
};

export default Layouts;