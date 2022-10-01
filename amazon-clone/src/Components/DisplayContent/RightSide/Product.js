import React from 'react'
import Rating from '@mui/material/Rating';

export default function (props) {
  return (
    <div className='product_main'>
        <div className='prodcut_image'>
            <div> <img src={props.obj.image} height="280px"/></div>
        </div>
        <div className='product_name'>
            {props.obj.name}
        </div>
        <div className='product_rating' style={{width:"15px"}}>
            <Rating name="read-only" value={props.obj.rating} style={{fontSize:"20px"}} readOnly />
        </div>
        <div className='product_price'>
            {props.obj.price}
        </div>
    </div>
  )
}
