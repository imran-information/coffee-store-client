import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData()

    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;


    return (
        <div>
            Update Coffee : {name}
        </div>
    );
};

export default UpdateCoffee;