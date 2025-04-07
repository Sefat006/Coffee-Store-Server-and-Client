import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

const handleUpdateCoffee = (e) => {

    e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'PUT',
                    headers : {'content-type': 'application/json'},
                    body: JSON.stringify(updateCoffee)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Updated!',
                            text: 'Coffee updated successfully',
                            icon: 'success',
                            confirmButtonText: 'Nice'
                        });
                    }                    
                })
    }

    return (
        <div>
         


            <div className=" w-11/12 flex justify-center items-center">
    <div className="w-11/12">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Coffee : {coffee.name}</h2>
        <form onSubmit={handleUpdateCoffee} className="space-y-4">
            {/* form row - name & quantity */ }
            <div className="flex gap-4">
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Name</label>
                    <input type="text" name='name' defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Available Quantity</label>
                    <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                </div>
            </div>
            {/* form row Supplier and Taste */}
            <div className="flex gap-4">
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Supplier Name</label>
                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier name" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Taste</label>
                    <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                </div>
            </div>
            {/* form row Category and details */}
            <div className="flex gap-4">
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Category</label>
                    <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Details</label>
                    <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                </div>
            </div>
            {/* form row photo URL*/}
            <div className="text-center w-full">
                <div className="w-full max-w-md mx-auto">
                    <label className="mb-1">Photo URL</label>
                    <input
                        type="text"
                        name="photo"
                        defaultValue={photo}
                        placeholder="Photo URL"
                        className="input input-bordered w-full"
                    />
                </div>
            </div>

            <div className="w-full items-center justify-center text-center">
            <input type="submit" value="Update Coffee" className='btn btn-block max-w-min bg-blue-800' />
            </div>
        </form>
    </div>
</div>



        </div>
    );
};

export default UpdateCoffee;