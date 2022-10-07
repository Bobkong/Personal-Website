import './Filter.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Filter(props) {

    return (
    <div id="filter-div">
        <Link to="/portfolio/" className={props.tag == "0" ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>
            Design
        </Link>
        <Link to="/portfolio/develop" className={props.tag == "1" ? "selectedTag" : "unSelectedTag"} style={{ cursor: "pointer" }}>
            Development
        </Link>
    </div>);
}

export default Filter;