import React, { useState, useEffect } from 'react'
import Row from './Components/rowInfo/row'
import './App.css'

function App () {
  const [datos, setDatos] = useState(null)
  const [datos2, setDatos2] = useState([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=12&currency=USD')
      .then(response => response.json())
      .then(data =>{
        setDatos(data.coins)
        setDatos2(data.coins)
      })
  }, [])

  if (datos === null) {
    return <h1>'Cargando...'</h1>
  }

  function filtrar (terminoB){
    
     var filtre= datos2.filter((dato)=>{
      console.log(terminoB)
      if(dato.name.toLowerCase().includes(terminoB.toLowerCase())){
        console.log(dato)
        return dato
      }
    })
    setDatos(filtre);
  }

  function handleChange(event) {
    setBusqueda(event.target.value);
      filtrar(event.target.value)

  }

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <a className="navbar-brand fs-1" href="#">
    <img className='logo mx-4' src='/HeadlogotipoCryptoApp.webp' alt='logotipo-Head' />
    Crypto APP
    </a>
    <div >
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" onChange={handleChange} value={busqueda} placeholder="Buscar" aria-label="Buscar" />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
      {/* <!-- container -->  */}

      <table className='table new table-hover table align-middle my-3 table-responsive'>
        <thead className='table-dark'>
          <tr >
            <th scope='col'>Rank</th>
            <th scope='col'>General</th>
            <th scope='col'>Precio</th>
            <th scope='col'>1h</th>
            <th scope='col'>24h</th>
            <th scope='col'>7d</th>
            <th scope='col'>Volumen</th>
            <th scope='col'>Capa de Mercado</th>
            <th scope='col'>Grafica/ 1S</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- tab bar --> */}

          {/* <!-- title --> */}
          {/* <h3 className="title text-base font-bold ">Name <hr />Price <hr />Graphic</h3> */}
          {/* <!-- /title --> */}

          {/* <!-- items --> */}

          {/* <!-- crypto items from js --> */}
          {
          datos.map((element) =>
            <tr key={element.rank}>
              <Row coin={element} />
            </tr>
          )}
          {/* <!-- /items --> */}

        </tbody>
      </table>
      {/* <!-- /container --> */}

    </>
  )
}

export default App
