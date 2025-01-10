import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

function UseCurrencyInfo(currency) 
{
     const[data,setData] = useState({})
    useCallback(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then(res=>setData(res[currency]))
    },[currency])
  return data
}

export default UseCurrencyInfo
