import { useState } from 'react'
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <div className='mb-10 items-center justify-center text-center flex flex-col'>
      <h1 className='text-6xl text-purple-600'>Hot cold coffee : {loadedCoffees.length}</h1>
      <Link to='/addCoffee'><button className='btn bg-green-800'>Add Coffee</button></Link>

      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map( coffee => <CoffeeCard
            key={coffee._id} 
            coffee={coffee}
            coffees = {coffees}
            setCoffees = {setCoffees}
            ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
