import pages from "../config/pages";
import React from "react";

const NavBar = ({active}) => (
    <div className="flex-auto">
        <nav className="navbar navbar-expand-lg navbar-light" id="main-navbar">
            <a className="navbar-brand" href="#">PAXFUL</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {
                        pages.map(({name, path, key}) => {
                            if (key === active) {
                                return <li className="nav-item active" key={key}>
                                    <a className="nav-link" href={path}>{name} <span
                                        className="sr-only">(current)</span>
                                    </a>
                                </li>
                            }

                            return <li className="nav-item" key={key}>
                                <a className="nav-link" href={path}>{name}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </nav>
    </div>

);
export default NavBar;
