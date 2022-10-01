import { Grid, Paper } from '@mui/material';
import React from 'react';
import './PlaceOrder.css';
import Rating from '@mui/material/Rating';

export default function PlaceOrder() {
  return (
    <div>
        <Grid container>
            <Grid item xs={6} >
                <img className='placeOrderImage' src="https://ik.imagekit.io/Amazon1234/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65__q09OWfWm8.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660740968496" />
            </Grid>
            <Grid item xs={4}>
                <div className='placeholder_description'>
                    <div style={{fontSize:"24px", lineHeight:"32px", fontWeight:500}} className='product_header'>OnePlus 5 (Slate Grey, 6GB RAM, 64GB Storage)</div>
                    <div>
                        <Rating name="read-only" value={5} style={{fontSize:"20px"}} readOnly />
                        400 ratings | 181 answered questions
                    </div>
                    <hr></hr>
                    <div>
                        <div className='textGap'>Price:	₹11,998.00 </div>
                        <div className='textGap'>You Save:	₹10,001.00 (45%)</div>
                        <div className='textGap'>Inclusive of all taxes</div>
                    </div>
                </div>
                
            </Grid>
            <Grid item xs={2}>
                <Paper variant='outlined' className='paperMain'>
                    <div className='button_main'>
                        <button className='placeholder_Button addToCart'>Add to Cart</button>
                        <button className='placeholder_Button buyNow'>Buy Now</button>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    </div>
  )
}
