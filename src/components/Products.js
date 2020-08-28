import React,{useContext}from 'react';
import {ReactShopping} from '../App'
// Components
import Product from './Product';

const Products = ({addItem}) => {
	// 
	const products=useContext(ReactShopping)
	console.log(products)
	return (
		<div className="products-container">
		{/* <ReactShopping.Consumer> */}
			{products.map(product => (
				<Product 
					key={product.id}
					product={product}
					addItem={addItem}
					// removeItem={removeItem}
				/>
			))}
			{/* </ReactShopping.Consumer> */}
		</div>
	);
};

export default Products;
