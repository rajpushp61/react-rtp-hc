import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
//     const[data,setData]=useState([])
// useEffect(()=>{
//     fetch('https://api.github.com/users/rajpushp61')
//     .then(res => res.json())
//     .then( data => {
//         console.log(data);
//         setData(data)
        
//     } )

// },[]
 const data = useLoaderData();
return(
    <div className='bg-gray-600 text-white text-3xl'>
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt='image' width={300}/>
    </div>
)
}

export default Github
export const githubInfoLoader = async () => {
   const response =  await  fetch('https://api.github.com/users/rajpushp61')
    return response.json()
}
