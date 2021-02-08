import React from 'react';
import NavBar from './NavBar';

const Container = ({active = null, children = []}) => {

    return (
        <>
            <NavBar active={active}/>
            <div className="flex-grow-1 d-flex flex-column">
                {children}
            </div>
        </>

    );
}

export default Container;
