import React, { useEffect, useState } from 'react';
import Product from './Product';
import './RightSide.css'

export default function RightSidePanel() {
  const[listOfProducts, setlistOfProducts] = useState([]);
  
  useEffect(()=>{
    let list = [
      {name:"Apple iPhone 13 (128GB) - Blue", rating:"4", price:"₹ 50600", image:"https://ik.imagekit.io/Amazon1234/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__QZQI4-FnF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660740965639"},
      {name:"Apple iPhone 13 (128GB) - Blue", rating:"4", price:"₹ 50600", image:"https://ik.imagekit.io/Amazon1234/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__QZQI4-FnF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660740965639"},
      {name:"Apple iPhone 13 (128GB) - Blue", rating:"4", price:"₹ 50600", image:"https://ik.imagekit.io/Amazon1234/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__QZQI4-FnF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660740965639"},
      {name:"Apple iPhone 13 (128GB) - Blue", rating:"4", price:"₹ 50600", image:"https://ik.imagekit.io/Amazon1234/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__QZQI4-FnF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660740965639"},
      {name:"Apple iPhone 13 (128GB) - Blue", rating:"4", price:"₹ 50600", image:"https://ik.imagekit.io/Amazon1234/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__QZQI4-FnF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660740965639"},
      {name:"Apple iPhone 13 (128GB) - Blue", rating:"4", price:"₹ 50600", image:"https://ik.imagekit.io/Amazon1234/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__QZQI4-FnF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660740965639"},
      {name:"Apple iPhone 13 (128GB) - Blue", rating:"6", price:"₹ 50600", image:"https://ik.imagekit.io/Amazon1234/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__QZQI4-FnF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660740965639"},
      {name:"Apple iPhone 13 (128GB) - Blue", rating:"5", price:"₹ 50600", image:"https://ik.imagekit.io/Amazon1234/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__QZQI4-FnF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660740965639"}
    ]

    setlistOfProducts(list);
  },[]);
  return (
    <div className='RightSide_main'>
      {
        listOfProducts.map((item)=>{
          return(
            <Product obj={item} />
          )
        })
      }
    </div>
  )
}
