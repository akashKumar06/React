import React from 'react';

import classes from './Header.module.css';

const Header = (props) => {
    return(
        <div className={classes.header}>
            <h1>ReactMeals</h1>
            <div>Your cart <span className={classes.qty}>{0}</span></div>
        </div>
    )
}

export default Header;