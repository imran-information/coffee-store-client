import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffees = useLoaderData()


  return (
    <div className='px-20'>
      <h1 className='text-4xl text-center my-10'>HOT Coffees SERVER</h1>
      <div className='grid md:grid-cols-2 gap-10'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App