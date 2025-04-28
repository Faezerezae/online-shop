"use client"
import { AppContext } from '@/context/AppContext'
import axios from 'axios'
import React, { useContext } from 'react'

function AddProduct() {
    const { data } = useContext(AppContext);
    console.log(data)
    const handleAddProduct = () => {
        axios.post("http://localhost:8000/products", { id: Math.random(), title: "another title", views: 200 }
        )
    }
    return (
        <button className='bg-blue-600 p-2 rounded-2xl my-2' onClick={handleAddProduct}>Add Product</button>
    )
}

export default AddProduct