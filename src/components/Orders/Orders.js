import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems/ReviewItem';

const Orders = () => {
    const {products,initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id) =>{
            const remaining = cart.filter(product => product.id !== id);
            setCart(remaining);
            removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product =><ReviewItem
                    product={product}
                    key={product.id}
                    handleRemoveItem ={handleRemoveItem}
                    ></ReviewItem>)
                
                }

            </div>
            <div className='cart-container'>
                <Cart cart ={cart}></Cart>

            </div>
        </div>
    );
};

export default Orders;