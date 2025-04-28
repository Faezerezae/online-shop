"use client"
import { IGetProduct } from '@/typescript/product';
import { clientFun } from '@/utils/clientFunc';
// import { sensitiveFun } from '@/utils/serverFunc';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ContactUs() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios("http://localhost:8000/products").then(result => { setProducts(result.data) });
        //چون فقط سرور انلی هستش به همین دلیل اگه باشه ارور در صفحه نمایش داده میشود
        // sensitiveFun();
        clientFun();
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