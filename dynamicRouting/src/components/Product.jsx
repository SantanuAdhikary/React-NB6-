import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

const Product = () => {

    let [product ,setProduct] = useState({})

    let {productId} =useParams()

        let navigate = useNavigate()
  

   
     let getData = async()=>{

        let response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        let data = await response.json()

        setProduct(data)
     }

     let changePage =()=>{
        navigate(-1)
     }

     useEffect(()=>{
        getData();
     })
  return (
    <>

    <h1> this is product details {productId}</h1>


     
     <h1> {product.title}</h1>
     <img src={product.image} alt="" />


     <button onClick={changePage}>goto previous page</button>
    
     </>
  )
}

export default Product





