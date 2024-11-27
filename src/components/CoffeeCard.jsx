import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });


    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img className='w-[250px]'
                    src={photo}
                    alt="Album" />
            </figure>
            <div className="card-body ">
                <div className='flex  justify-between'>
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Chef: {chef}</p>
                        <p>Suppler: {supplier}</p>
                        <p>Category: {category}</p>
                        <p>Taste: {taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical gap-6">
                            <button className="btn join-item">view</button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn join-item">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeCard;