import React, { useState, useEffect } from 'react';
import BeneficiaryModal from './BeneficiaryModal';
import Matbar from '../../src/components/ui/matbar';
import Footer from '../../src/components/ui/Footer'; // Correct path for Footer component
import axios from 'axios';

function createData(name, age, location, contact, gender, profit, address) {
    return { name, age, location, contact, gender, profit, address};
  }

const beneficiaries = [
  {
    id: 1,
    name: 'Aman Sharma',
    age: 29,
    sell: 8,
    count: 10,
    profit: 10000,
    contact: '94121345678',
    gender: 'Male',
    Aadhar: '1234567890',
  },
  {
    id: 2,
    name: 'Neha Verma',
    age: 32,
    sell: 2,
    count: 4,
    profit: 3000,
    contact: '7416753857',
    gender: 'Female',
    Aadhar: '3454567890',
  },
  // Add more beneficiaries as needed
];

const BeneficiaryList = () => {

  const [beneficiary, setBeneficiary] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/all_beneficiary");
        setBeneficiary(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after mount

  const rowsdata = [];

  for (let i = 0; i < beneficiary.length; i++) {
    rowsdata.push(createData(beneficiary[i].name, beneficiary[i].age, beneficiary[i].location, beneficiary[i].contact, beneficiary[i].gender, beneficiary[i].profit, beneficiary[i].address));
  }


  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

  const openModal = (beneficiary) => {
    setSelectedBeneficiary(beneficiary);
  };

  const closeModal = () => {
    setSelectedBeneficiary(null);
  };

  return (
    <>
      <Matbar /> {/* Using the Matbar component */}
      <div style={styles.container}>
        <h1 style={styles.heading}>Beneficiaries</h1>
        <div style={styles.listContainer}>
          {rowsdata.map((beneficiary) => (
            <div
              key={beneficiary.id}
              onClick={() => openModal(beneficiary)}
              style={styles.card}
            >
              <h3>{beneficiary.name}</h3>
              <p><strong>Age:</strong> {beneficiary.age}</p>
              <p><strong>Contact:</strong> {beneficiary.contact}</p>
              <p><strong>Gender:</strong> {beneficiary.gender}</p>
            </div>
          ))}
        </div>
        {selectedBeneficiary && (
          <BeneficiaryModal
            beneficiary={selectedBeneficiary}
            closeModal={closeModal}
          />
        )}
      </div>
      <Footer /> {/* Footer component outside of styles */}
    </>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  listContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
};

export default BeneficiaryList;
