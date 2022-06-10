import React, { useState } from 'react'
import Product from '../product/Product'

const ProductsList = () => {

    //state naudosiu prekiu krepseliui
    const [items, setItems] = useState([]);

    //pridejimo i krepseli funkcija
    const addToCart = (product) => {
        //console.log(product);
        let myCart = [...items];
        //1-tikrinti, ar tokia preke jau yra krepselyje
        let arYra = myCart.find((preke) => product.name === preke.name);
        console.log(arYra);
        //3-jei preke yra surasti savybe kiekis ir ja padidinti ++
        if(arYra && arYra.kiekis < product.countInStock){
          arYra.kiekis++;
        } else if(arYra===undefined && product.countInStock > 0){
          arYra={
            ...product,
            kiekis: 1
          }
          myCart.push(arYra);
        }        
        else{
          alert('prekes sandelyje nebera')
        }
        setItems(myCart);
    }
    console.log(items);
  return (
    <div>
        <Product addToCart={addToCart}/>
    </div>
  )
}

export default ProductsList