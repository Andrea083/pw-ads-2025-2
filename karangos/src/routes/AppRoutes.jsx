<<<<<<< HEAD

import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import CarsList from '../pages/cars/CarsList'
import CustomersList from '../pages/customers/CustomersList'
import Autora from '../pages/autora/Autora'

export default function AppRoutes() {
 return <Routes>
   <Route path="/" element={ <Homepage /> } /> 
   <Route path="/cars" element={ <CarsList /> } />
   <Route path="/customers" element={ <CustomersList /> } />
   <Route path="/autora" element={ <Autora /> } />
  
 </Routes>
}

=======
import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'

import CarsList from '../pages/cars/CarsList'
import CustomersList from '../pages/customers/CustomersList'

export default function AppRoutes() {
  return <Routes>
    <Route path="/" element={ <Homepage /> } />

    <Route path="/cars" element={ <CarsList /> } />
    <Route path="/customers" element={ <CustomersList /> } />
    
  </Routes>
}
>>>>>>> 58959509823bdd6e5c1fe406b242acf7e246f546
