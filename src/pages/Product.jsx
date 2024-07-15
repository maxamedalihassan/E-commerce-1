import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/Breadcrum/BreadCrum';
import ProductDisplay from '../Components/productDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RealtedProducts/RelatedProducts';



const Product=()=> {
  const {all_product} = useContext(ShopContext);
  const {productId}=useParams();
  const Product =all_product.find((e)=>e.id===Number(productId));
  
  return (
    <div>
     <BreadCrum product={Product}/> 
     <ProductDisplay product={Product}/>
     <DescriptionBox />
     <RelatedProducts/>
    
      
    </div>
  )
}

export default Product