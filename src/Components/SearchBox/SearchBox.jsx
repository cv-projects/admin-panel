import React from 'react';
import './searchBox.scss';
import {SearchIcon} from "../Icons/Icons";

const SearchBox = () => {
    return (
        <section className="search--box">
            <form className="search--form">
                <input className="search--input"/>
                <SearchIcon/>
            </form>
        </section>
    );
};

export default SearchBox;