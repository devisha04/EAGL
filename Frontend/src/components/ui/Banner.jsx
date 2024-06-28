import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../../../public/banner1.jpg';
import banner2 from '../../../public/banner2.jpg';
import banner3 from '../../../public/banner3.jpg';
import { BorderBottomRounded } from '@mui/icons-material';
//import Matbar from '@/components/ui/matbar';

function Banner() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px', // Adjust padding as needed for space around text
    minHeight: 'calc(100vh - 64px)', // Adjust for navbar height (assuming navbar height is 64px)
  };

  const headingStyles = {
    textAlign: 'center',
    marginBottom: '20px', // Space below the heading
  };

  const carouselContainerStyles = {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px', // Add space between heading and carousel
  };

  const carouselStyles = {
    width: '90%', // Carousel spans full width
    maxWidth: '1200px', // Adjust maximum width of carousel if needed
  };

  return (
    <>
      
      <div style={{ ...containerStyles, marginTop: '20px' }}>
        <div style={headingStyles}>
          <h1 className="text-2xl md:text-4xl font-bold" >
            EAGL Livestock Foundation is here to save lives and create a{' '}
            <span className="text-pink-500">brighter future!!!</span>
          </h1>
          <br></br>
          <br></br>
          <p  className="text-sm md:text-xl" >
            Welcome to the Eagl Foundation, your beacon of hope and stability for tribal communities. At Eagl Foundation, we are dedicated to empowering tribal families, curbing migration, and paving the way for a sustainable future. Our initiatives provide the tools and resources necessary for building a stable, self-sufficient life while preserving the rich cultural heritage of these communities. Join us in our mission to create a brighter, more secure future for all. Dive in and discover the impactful work we do today!
          </p>
          <br></br>
        </div>

        <div style={carouselContainerStyles}>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            style={carouselStyles}
          >
            <div>
              <img src={banner1} alt="Banner 1" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src={banner2} alt="Banner 2" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src={banner3} alt="Banner 3" className="w-full h-full object-cover" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Banner;
