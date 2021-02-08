import React from "react";

export default ({list}) => {
    return (
        <ul className="nav nav-pills" id="trades-navbar">
            {
                list.map(item => {
                    if (item === 'Trades') {
                        return (
                            <li className="nav-item" key={item}>
                                <a className="nav-link active" href="#">{item}</a>
                            </li>
                        );
                    }

                    return (
                        <li className="nav-item" key={item}>
                            <a className="nav-link" href="#">{item}</a>
                        </li>
                    );
                })
            }
        </ul>
    );
};
