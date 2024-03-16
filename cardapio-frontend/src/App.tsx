import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';

import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handlerOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div className="container">
      <h1>Cardapio</h1>

      <div className="card-grid">
        { 
          data?.map(foodData => 
            <Card 
              price={foodData.price} 
              title={foodData.title} 
              image={foodData.image} 
            />) 
        }

      </div>
      { isModalOpen && <CreateModal closeModal={handlerOpenModal}/> }

      <button onClick={() => handlerOpenModal()}>Novo</button>
    </div>
  )
}

export default App
