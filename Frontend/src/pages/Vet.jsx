import React from 'react';
import BasicTable from '@/components/schedule';
import AlignItemsList from '@/components/emergency';
import SearchAppBar from '@/components/ui/matbar';

function Vet() {
    return (
      <>
      <SearchAppBar/>
        <div style={styles.container}>
            <div style={styles.content}>
                <BasicTable/>
            </div>
            <div style={styles.content}>
                <AlignItemsList/>
            </div>
        </div>
        </>
    )
}

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100vh',  // Full viewport height
      width: '100%',    // Full width
      backgroundColor: '#f0f0f0' // Optional: a background color for visibility
    },
    content: {
      textAlign: 'center',
      padding: '20px', // Optional: padding around the content
      backgroundColor: 'white', // Optional: background color for the content
      borderRadius: '8px', // Optional: rounded corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Optional: shadow for better visibility
    }
  };

export default Vet;