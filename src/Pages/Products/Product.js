import React from 'react';
import UseProducts from '../Hooks/UseProducts';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] =UseProducts()
    return (

        <>
          <h1 className='text-primary text-5xl text-center mt-12 mb-10'>Tools</h1>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3  gap-7 px-10 py-10 mt-5 mb-12'>
           
            {
                products.map(product=> <ProductCard key={product.id} product={product}>

                </ProductCard> )
            }
        </div>
        </>
    );
};

export default Product;