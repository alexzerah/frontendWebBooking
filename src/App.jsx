import './App.css'
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function App() {

  const [reservations, setReservations] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1MDgxMTAsImV4cCI6MTcxMDUxMTcxMH0.10wsyP3EQ82ZY86kfxpa5w-KuJDHptUWb1rNzH93HFY";

  useEffect(() => {
    // fetch
    fetch("http://localhost:3000/api/reservations", {
      method: "GET",
      headers: {
        "Authorization" : token,
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setReservations(data)
    })
}, []);

  return (
    <>
      <h1>Simplon - Frontend</h1>
      <Link to="/signup">Signup</Link>
      <p className="paragraph">1ere partie</p>
      <ul className='reservationContainer'>
        {reservations?.items?.map((r) => {
          return (
            <li className='reservation' key={r.id}>
              <div>Nombre de clients : {r.number_of_customers}</div>
              <div>Reservé par : {r.name}</div>
              <div>Note : {r.note}</div>
            </li>
          )
        })}
      </ul>
      <p>Made with Love by Alex</p>
    </>
  )
}

export default App
