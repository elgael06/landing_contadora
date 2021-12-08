import React from "react";

type props = {
    children: any
}

const Layout = ({ children }: props) => (
    <div className='hero is-link is-fullheight is-fullheight-with-navbar'>
        <div className='hero-body'>
            {children}
        </div>
    </div>);

export default Layout;