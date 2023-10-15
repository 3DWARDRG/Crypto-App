import React, { useState, useEffect } from 'react'
import Graph from '../graphLine/Graph'
import '../../index.css'

function addCrypto ({ coin }) {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    fetch(`https://api.coinstats.app/public/v1/charts?period=1w&coinId=${coin.name.toLowerCase()}`)
      .then(res => res.json())
      .then(data => setDatos(data.chart.map((dato) => {
        return dato[1]
      })))
      .catch(err=>console.error(err))
  }, [])

  const increase = (value)=> {
    return value > 0 ? 'green' : 'red';
  }
  const changeIcon = (value)=> {
    return value > 0 ? 'positive' : 'negative'
  }

  return (
    <>
    <th className='p-2' scope="row">{coin.rank}</th>
      <td className='p-3'>
        <img src={coin.icon} alt='' className='img-thumbnail' />
        <div>
          <p className='fw-bold m-1 '>{coin.name}</p>
          <p className='fw-light m-1'>{coin.symbol}</p>
        </div>
      </td>
      <td className='p-3'>
        <p className='m-0'>{coin.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })} USD</p>
        </td>
        <td className='p-3'>
        <p className={`${increase(coin.priceChange1h)} fst-italic m-0 `}>
          <i className={`${changeIcon(coin.priceChange1h)}`} />
          {coin.priceChange1h.toFixed(2)}%
        </p>
      </td>
      <td className='p-3'>
        <p className={`${increase(coin.priceChange1d)} fst-italic m-0 `}>
          <i className={`${changeIcon(coin.priceChange1d)}`} />
          {coin.priceChange1d.toFixed(2)}%
        </p>
      </td>
      <td className='p-3'>
        <p className={`${increase(coin.priceChange1w)} fst-italic m-0 `}>
          <i className={`${changeIcon(coin.priceChange1w)}`} />
          {coin.priceChange1w.toFixed(2)}%
        </p>
      </td>
      <td className='p-3'>
        <p className='m-0'>{coin.volume.toLocaleString('en-US', { style: 'currency', currency: 'USD'})} USD</p>

      </td>
      <td className='p-3'>
      <p className='m-0'>{coin.marketCap.toLocaleString('en-US', { style: 'currency', currency: 'USD'})} USD</p>

      </td>
      <td className='p-3'>
        <Graph res={datos} key={coin.name} style="width:100px, height:100px"/>
      </td>
    </>
  )
}

export default addCrypto
