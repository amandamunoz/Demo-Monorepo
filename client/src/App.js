import './App.css';
import {useEffect, useState} from 'react'
function App() {
  
  const [message, setMessage] = useState('')
  const [pets, setPets] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(data => setMessage(data.message))

    fetch('http://localhost:3000/pets')
    .then(res => res.json())
    .then(pets => setPets(pets))

  }, [])
  return (
    <div className="App">
      <h1>{message}</h1>
      {pets && (
      <ul>
        {pets.map(pet => <li key={`${pet.id}-${pet.name}`}>{pet.name}</li>)}
        </ul>
      )}
    </div>
  );
}

export default App;
