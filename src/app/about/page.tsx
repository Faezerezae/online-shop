import React from 'react'
import Counter from './components/counter'
import ServerComp from './components/serverComp'
// import axios from 'axios'
import { IGetProduct } from '@/typescript/product';
import AddProduct from './components/addProduct/AddProduct';
import { sensitiveFun } from '@/utils/serverFunc';

async function About() {
  // const { data } = await axios("http://localhost:8000/products");
  const result = await fetch("http://localhost:8000/products", {
    // cache: "no-cache"
    //درخواست بعدی بعد از 10 تانیه دیگه ارسال میشه
    next: {
      revalidate: 10
    }
  });
  const data = await result.json();
  // console.log(data);
  sensitiveFun()
  return (
    <>
      <div>About</div>
      <AddProduct />
      {data.map((item: IGetProduct) => (
        <div className='bg-slate-600 mb-2' key={item.id}>
          <h5>{item.title}</h5>
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