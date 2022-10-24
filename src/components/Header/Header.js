import React from 'react';

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.block}>
            <input type="text" />
            <button>Search</button>
        </div>
    );
};

export {Header};