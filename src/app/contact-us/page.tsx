"use client"
import { IGetProduct } from '@/typescript/product';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ContactUs() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios("http://localhost:8000/products").then(result => { setProducts(result.data) });
    }, [])

    return (
        <>
            <div>Contact Us</div>
            <div> {products?.map((item: IGetProduct) => (
                <div className='bg-slate-600 mb-2' key={item.id}>
                    <h5>{item.title}</h5>
                </div>
            ))}</div></>

    )
}

export default ContactUs