import React from 'react';

// EXPORTING THE CONTAINER, ROW, AND COL COMPONENTS FROM HERE

// THIS CONTAINER COMPONENT ALLOWS US TO USE A BOOTSTRAP CONTAINER WITHOUT WORRYING ABOUT THE CLASSNAMES
export function Container({fluid, children}) {
    return<div className={`container${fluid ? '-fluid' :''}`}>{children}</div>
    }

// THIS ROW COMPONENT ALLOWS US TO USE A BOOTSTRAP CONTAINER WITHOUT WORRYING ABOUT THE CLASSNAMES
export function Row ({ fluid, children}) {
    return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>
};

// THIS COL COMPONENT LETS US SIZE BOOTSTRAP COLUMNS WITH LESS SYNTAX
// e.g.<Col size='md-12'> instead of <div className='col-md-12>
export function Col({ lPadding, size, children }) {
    let classes='';
    classes=lPadding ? `pl-${lPadding}`:'';
    classes=classes + (size ? `col-${size}`:'');
    
    return(
        <div className={classes.trim()}>
            {children}
        </div>
    );
}