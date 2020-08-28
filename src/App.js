/* 
We are learning context API here through this ; here what we are going to do is we are using context instead of props , so we are gonna remove the props and use our context in there.We are going step by step as Josh taught us. Lets set it up first
Step 1: import createContext via 'react'
import-> 
 */

import React, { useState,createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

/* Step 2:: lets create the context now 
import->assign->*/
export const ReactShopping=createContext();

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
	

    
	setCart([...cart, item])
	console.log(cart)
	};
	const removeItem = (itemId) => {
		cart.filter((item) => !item.id === item.itemId);
	  };

	return (
		<div className="App bg-danger">

			{/* Step 3::: Wrapping <ReactShopping.Provider value={cart}
			import->assign->wrap*/}
			<ReactShopping.Provider  value={cart}  >
					<Navigation    />
</ReactShopping.Provider>
					{/* Routes */}
					<ReactShopping.Provider value={products}>
					<Route exact path="/">
						<Products products={products} addItem={addItem} />
					</Route>
					{/* </ReactShopping.Provider> */}

					<Route path="/cart">
						<ShoppingCart cart={cart} removeItem={removeItem} />
					</Route>
			</ReactShopping.Provider>
		</div>
	);
}

export default App;
