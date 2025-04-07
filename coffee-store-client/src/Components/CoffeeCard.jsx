import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {

    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleDelete = (_id) => {
      console.log(_id);
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
            method: 'DELETE',
            // headers: {'content-type' : 'application/json'},
            // body: JSON.stringify()
          })
          .then( res => res.json())
          .then( data => {
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee  has been deleted.",
                icon: "success"
              });
              const remaining = coffees.filter( cof => cof._id !== _id);
              setCoffees(remaining);
            }
          })
        }
      });
    }

    return (
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex gap-4 ml-3 mt-8">
    <div className='space-y-5'>
    <h2 className="card-title">Name : {name}</h2>
    <p className='card-actions'> Supplier : {supplier}</p>
    <p className='card-actions'> Quantity : {quantity}</p>
    </div>
    <div className="card-action flex flex-col space-y-0.5">
      <button className="btn btn-primary">View</button>
      <Link to={`updateCoffee/${_id}`} className="btn btn-primary">Edit</Link>
      <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;