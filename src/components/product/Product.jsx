import React from 'react';
import data from '../../data/data';

const Product = () => {
    console.log(data);
  return (
    <div className='itemList'>
        {
            data.map((product, index)=> (
                <div className='item'>
                    <img src={product.imageUrl} alt="" />
                    <p key={index}>Product: {product.name}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price} $</p>
                    <button>Buy</button>

                </div>
            ))
        }
    </div>
  )
}

export default Product