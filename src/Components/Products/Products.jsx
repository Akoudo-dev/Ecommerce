import React from 'react';
import Heading from '../shared/Heading';
import ProductCard from './ProductCard';

// images import
import Img1 from '../../assets/images/Img3.jpg';
import Img2 from '../../assets/images/Img4.jpg';
import Img3 from '../../assets/images/Img3.jpg';
import Img4 from '../../assets/images/Img4.jpg';
import Img5 from '../../assets/images/p10 (1).png'; 
import Img6 from '../../assets/images/Img3.jpg';
import Img7 from '../../assets/images/Img3.jpg';
import Img8 from '../../assets/images/Img3.jpg';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggle",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Goggle",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img8,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className='container'>
        {/* header section */}
        <Heading title="Our products" subtitle="Explore Our Products" />
        {/* body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;