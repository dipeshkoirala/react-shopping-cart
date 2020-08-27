/* Step:4::Import useContext from react */
import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
/* Step:5:: Import our context: ReactShopping from App.js */
import {ReactShopping} from '../App'
const Navigation = (props) => {
/* Step:6::Declare a variable and assign to it our context */
const cartLength=useContext(ReactShopping)
	return (
		<div className="navigation bg-primary">
		<ReactShopping.Consumer>
			{(a)=>(<>
			
				<NavLink to="/">Products</NavLink>
				
						<NavLink to="/cart">
					{/* Product:<span>{cartLength.products.length}</span> */}
					Cart <span>{a.length}</span>
					{/* {console.log(cartLength.cart.length)} */}
				</NavLink>
			</>)}
		
		</ReactShopping.Consumer>
		</div>
	);
};


export default Navigation;
