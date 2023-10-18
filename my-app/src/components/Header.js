import React from 'react';
import { Link } from 'react-router-dom';
import * as MdIcons from "react-icons/md";

const Header = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link className="navbar-brand bg-light" to={"/"}><MdIcons.MdDashboard/>Dashboard</Link>
                <span className="navbar-text">Hello User</span>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
    )

}

export default Header;