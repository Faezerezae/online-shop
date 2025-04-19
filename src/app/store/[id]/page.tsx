import React from 'react'

interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Products(props: IProductProps) {
  const { id } = await props.params;
  return (
    <div>{id}</div>
  )
}

export default Products