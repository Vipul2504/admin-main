import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

    const { user } = useSelector(state => state.auth)

    return <div>
        <h1 className='font-bold text-3xl'>Hello there, {user?.email}</h1>
        <p className=''>Here is some information we gathered about your store</p>
    </div>;
};

export default Header;
