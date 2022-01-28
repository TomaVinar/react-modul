import React from "react";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

import "./Layout.css"

const Layout = () => {

    return (
        <div>
            <div className={'header'}>
                <h1>The Rick and Morty API</h1>
                <div className={'menu'}>
                    <Link to={'character?page=1'}><button>Characters</button></Link>
                    <Link to={'location?page=1'}><button>Locations</button></Link>
                    <Link to={'episode?page=1'}><button>Episodes</button></Link>
                </div>

            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default Layout;