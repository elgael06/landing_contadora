import React from "react";
import themeSignal from '../../signal/theme.signal';

type props = {
    children: any
}

const Layout = ({ children }: props) =>{ 
    const theme = themeSignal.useTheme();
    return(
    <div className={`hero ${theme} is-fullheight is-fullheight-with-navbar`}>
        <div className='hero-body'>
            {children}
        </div>
    </div>);
}
export default Layout;