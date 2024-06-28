import React from 'react'

import Banner from '../components/ui/BannerHindi';
import Footer from '../components/ui/FooterHindi';
import SearchAppBar from '@/components/ui/matbarHindi';
import backgroundImage from '/bg.png'; // Import your background image

function HomeHindi() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure full viewport height coverage
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Ensures Footer sticks to bottom
  };

  return (
   <div style={containerStyle}>
   <SearchAppBar/>
   <Banner/>
   <Footer/>

   </div>
  )
}

export default HomeHindi;