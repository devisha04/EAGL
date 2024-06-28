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
              ईएजीएल लाइवस्टॉक फाउंडेशन जीवन बचाने और{' '}
            <span className="text-pink-500">उज्जवल भविष्य बनाने के लिए यहां है!!!</span>
          </h1>
          <br></br>
          <br></br>
          <p  className="text-sm md:text-xl" >
          ईगल फाउंडेशन में आपका स्वागत है, यह आदिवासी समुदायों के लिए आशा और स्थिरता की किरण है। ईगल फाउंडेशन में, हम आदिवासी परिवारों को सशक्त बनाने, पलायन को रोकने और एक स्थायी भविष्य का मार्ग प्रशस्त करने के लिए समर्पित हैं। हमारी पहल इन समुदायों की समृद्ध सांस्कृतिक विरासत को संरक्षित करते हुए एक स्थिर, आत्मनिर्भर जीवन के निर्माण के लिए आवश्यक उपकरण और संसाधन प्रदान करती है। सभी के लिए एक उज्जवल, अधिक सुरक्षित भविष्य बनाने के हमारे मिशन में हमारे साथ जुड़ें। इसमें गोता लगाएँ और आज हमारे द्वारा किए जाने वाले प्रभावशाली कार्यों को जानें!
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
