import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneBike } from "../assets/data/carData";
import "../style/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
const shoppingCart = () => {


const { slug } = useParams();
const [bikesList, setBikesList] = useState([]);
useEffect(() => {
  getOneBike(slug).then((res) => {
    setBikesList(res);
  });
  window.scrollTo(0, 0);
}, []);
const bike = useMemo(() => {
  return bikesList.find((bike) => bike.carName === slug) ?? {};
}, [bikesList]);
console.log(bike);

function ShoppingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
}) {
	return (
		<div className="modal" style={{display: visibilty ? "block": "none",}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Shopping cart</h2>
					<button
						className="btn close-btn"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
                <div className=".cart-products">
                    {bike.length == 0 && (
                        <span className = "empty-text">
                            Вы еще ничего не избрали!
                        </span>
                    )}
                {bike.map(bike => (
                    <div className="cart-product" key = {bike.id}>
                        <img src={bike.imgURL} alt={bike.brand} />
                        <div className="products-info">
                            <h3>
                                {bike.carName}
                            </h3>
                            <span className = "product-price">
                                {bike.price}$
                            </span>
                        </div>
                        <button className="btn remove-btn" onClick={() => onProductRemove(bike)}><RiDeleteBin6Line size={20}/></button>
                    </div>
                ))}
                
                </div>
        </div>
     </div>
    );            
    };        
}
export default ShoppingCart;