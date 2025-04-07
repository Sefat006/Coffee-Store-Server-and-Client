import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        // sent data to server and make URL
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers : {'content-type': 'application/json'},
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Successful',
                    text: 'You successfully purchase it',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className=" w-11/12 flex justify-center items-center">
    <div className="w-11/12">
        <h2 className="text-2xl font-bold mb-4 text-center">ADD Coffee</h2>
        <form onSubmit={handleAddCoffee} className="space-y-4">
            {/* form row - name & quantity */ }
            <div className="flex gap-4">
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Name</label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Available Quantity</label>
                    <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                </div>
            </div>
            {/* form row Supplier and Taste */}
            <div className="flex gap-4">
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Supplier Name</label>
                    <input type="text" name="supplier" placeholder="Supplier name" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Taste</label>
                    <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                </div>
            </div>
            {/* form row Category and details */}
            <div className="flex gap-4">
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Category</label>
                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="mb-1">Details</label>
                    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                </div>
            </div>
            {/* form row photo URL*/}
            <div className="text-center w-full">
                <div className="w-full max-w-md mx-auto">
                    <label className="mb-1">Photo URL</label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Photo URL"
                        className="input input-bordered w-full"
                    />
                </div>
            </div>

            <div className="w-full items-center justify-center text-center">
            <input type="submit" value="Add Coffee" className='btn btn-block max-w-min bg-blue-800' />
            </div>
        </form>
    </div>
</div>

    
    );
};

export default AddCoffee;