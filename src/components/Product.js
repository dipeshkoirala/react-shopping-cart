
import React,{useContext}from 'react';
import {ReactShopping} from '../App'

const Product = ({addItem,key,product} ) => {
// const product=useContext(ReactShopping)

	console.log("this is my props from ",product)
	return (
		

		<div className="product bg-success">
			{/* {productt.map((product)=>( */}
				{/* <div key={product.id}> */}
			<img src={product.image} alt={`${product.title} book`} />

			<h1 className="title">{product.title}</h1>

			<p className="price">${product.price}</p>

			<button onClick={() => addItem(product)}>
				Add to cart
			</button>
			</div>
			

	);
};

export default Product;
