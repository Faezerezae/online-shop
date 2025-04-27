import React from 'react'
import Counter from './components/counter'
import ServerComp from './components/serverComp'
import axios from 'axios'
import { IGetProduct } from '@/typescript/product';

async function About() {
  const { data } = await axios("https://fakestoreapi.com/products");
  // console.log(data);
  return (
    <>
      <div>About</div>
      {data.map((item: IGetProduct) => (
        <div className='bg-slate-600 mb-2' key={item.id}>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      ))}
      {/* ServerComp is server component as child */}
      <Counter>
        <ServerComp />
      </Counter>
    </>

  )
}

export default About