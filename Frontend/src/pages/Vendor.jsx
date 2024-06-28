// // src/Vendor.jsx
// import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import '../../src/Vendor.css';

// export default function Vendor() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('/list.json')
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <Container className="vendor-container">
//       <Typography variant="h4" className="vendor-title">
//         Indian Goat Breeds from Maharashtra
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {data.map((item, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card className="vendor-card">
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="200" // Fixed height for consistent image size
//                   image={item.image}
//                   alt={item.title}
//                   className="vendor-card-image"
//                 />
//                 <CardContent className="vendor-card-content">
//                   <Typography gutterBottom variant="h5" component="div" className="vendor-card-title">
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {item.description}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../Vendor.css'; // Import the CSS file
import SearchAppBar from '@/components/ui/matbar';

export default function Vendor() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/list.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to handle adding goats to cart
  const handleAddToCart = (title) => {
    // For now, simulate adding to cart logic
    console.log(`Added ${title} to cart`);
  };

  return (
    <>
    <SearchAppBar/>
    <Container className="vendor-container">
      <p variant="h4" className="vendor-title">
        Goat Breeds
      </p>
      <Grid container spacing={4} justifyContent="center">
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className="vendor-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200" // Fixed height for consistent image size
                  image={item.image}
                  alt={item.title}
                  className="vendor-card-image"
                />
                <CardContent className="vendor-card-content">
                  <Typography gutterBottom variant="h5" component="div" className="vendor-card-title">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <p variant="body2" color="text.secondary" className="availability-info"  font-family="Arial Rounded">
                    Available:
                    {/* <span className="availability-count"> {item.availability}</span>
                    <br />
                    Male: <span className="availability-count">{item.maleAvailability}</span>
                    <br />
                    Female: <span className="availability-count">{item.femaleAvailability}</span> */}
                  </p>
                  <Button onClick={() => handleAddToCart(item.title)} variant="contained" class="purchase-button" color="primary">
                    Purchase
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
}
