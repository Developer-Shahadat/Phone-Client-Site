import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhonePage = () => {
    const phone = useLoaderData();
    console.log(phone);
    return (
        <div>
            <h1>{phone.name}</h1>
            <img src={phone.image} alt="" />
            <h1>Price : {phone.price}$</h1>
        </div>
    );
};

export default PhonePage;