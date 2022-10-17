import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItems.css'

const ReviewItem = ({product,handleRemoveItem}) => {
    const {id,name,img,price,shipping,quantity} = product;
    return (
        <div className='review-Item'>
            <div>
                <img src={img} alt=''/>
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>price : ${price}</small></p>
                    <p><small>shipping : $<span>{shipping}</span></small></p>
                    <p><small>quantity: ${quantity}</small></p>
                    

                </div>
                <div className='delete-container'>
                    <button className='btn-delete' onClick={()=>handleRemoveItem(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;