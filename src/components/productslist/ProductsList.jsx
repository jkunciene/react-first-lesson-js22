import React, { useState } from 'react'
import Product from '../product/Product'

const ProductsList = () => {

    //state naudosiu prekiu krepseliui
    const [items, setItems] = useState([]);

    //pridejimo i krepseli funkcija
    const addToCart = (product) => {
        console.log(product);

        //1-tikrinti, ar tokia preke jau yra krepselyje
        //2-jei nera prideti savybe kiekis ir reiksme 1
        //3-jei preke yra surasti savybe kiekis ir ja padidinti ++

    }
  return (
    <div>
        <Product addToCart={addToCart}/>
    </div>
  )
}

export default ProductsList