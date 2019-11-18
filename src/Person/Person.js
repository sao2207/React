/*I declared a variable, and this is going to show some message at the web, but 
I had to import REACT for being able to use JSX lenguage */

import React from 'react';
import { directive } from '@babel/types';

const person = (props) => {
    return(
        <div>
            <p>I'm {props.Name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
        </div>
        
    )
}

export default person; //Exporting the function 