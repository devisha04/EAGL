import React from 'react'

import Banner from '../components/ui/Banner';
import Footer from '../components/ui/Footer';
import SearchAppBar from '@/components/ui/matbar';
import backgroundImage from '/bg.png'; // Import your background image

function Home() {
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

export default Home;