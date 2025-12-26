import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from '../shared/Heading';

// Import images
import Img1 from '../../assets/images/b1.png';
import Img2 from '../../assets/images/b2.png';
import Img3 from '../../assets/images/b3.png';

// Blog data
const BlogData = [
  {
    title: "How to Choose the Perfect Smartwatch",
    subtitle: "Discover essential tips to select the best smartwatch for your needs.",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosDelay: '0',
  },
  {
    title: "Top Features to Look for in a Smartwatch",
    subtitle: "Learn about the key smartwatch features that can enhance your lifestyle.",
    published: "Jan 22, 2024 by Dilshad",
    image: Img2,
    aosDelay: '200',
  },
  {
    title: "Smartwatch Buying Guide for Beginners",
    subtitle: "A comprehensive guide to help beginners choose the right smartwatch.",
    published: "Jan 25, 2024 by Dilshad",
    image: Img3,
    aosDelay: '400',
  },
];

const Blogs = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,       // Animation plays only once
    });
  }, []);

  return (
    <div className='my-12'>
      <div className='container'>
        {/* Header section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />

        {/* Blogs section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {/* Blog cards */}
          {BlogData.map((data, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-md'
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
            >
              {/* Image section */}
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img
                  src={data.image}
                  alt={data.title}
                  className='w-full h-[200px] object-cover rounded-2xl hover:scale-105 duration-500'
                />
              </div>
              {/* Content section */}
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.published}</p>
                <p className='font-bold text-lg line-clamp-1'>{data.title}</p>
                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
