import React from 'react';

import classes from './FoodSection.module.css';
import FoodItems from './FoodItems';

const FoodSection = props => {
    return(
        <div className={classes.section}>
            <FoodItems></FoodItems>            
        </div>
    )
}

export default FoodSection;