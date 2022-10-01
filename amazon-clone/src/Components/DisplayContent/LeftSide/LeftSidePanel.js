import React from 'react';
import './LeftSide.css';

export default function LeftSidePanel() {
  return (
    <div className='LeftSide_main'>
        <div className='brandname_header'>Brands</div>
        <div >
            <label className='brandname_item'>
                <input type="checkbox" value="Apple" /> Apple
            </label>
            <label className='brandname_item'>
                <input type="checkbox" value="Sony" /> Sony
            </label>
            <label className='brandname_item'>
                <input type="checkbox" value="Xiomi" /> Xiomi
            </label>
            <label className='brandname_item'>
                <input type="checkbox" value="Samsung" /> Samsung
            </label>
            <label className='brandname_item'>
                <input type="checkbox" value="Google" /> Google
            </label>
        </div>
    </div>
  )
}
