import React from 'react';

import classes from './Content.module.css';

const Content = () => {
    return(
        <div className={classes.content}>
            <div>
                <h2>Delicious food, Delivered to you</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, laborum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto.</p>
            </div>
        </div>
    )
}

export default Content;