import './App.css';
import Tours from './components/Tours'
import data from './data';
import { useState } from 'react';
import Refresh from './components/Refresh'

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    setTours(tours.filter(tour => tour.id !== id));
  }

  function refreshTours() {
    setTours(data);
  }

  if (tours.length === 0) {
    return (

      <Refresh refreshTours={refreshTours}></Refresh>

    );
  }

  return (
    <div className='wrapper'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
