// src/pages/BeneficiaryModal.jsx
import React from 'react';

function BeneficiaryModal({ beneficiary, closeModal }) {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>Name: {beneficiary.name}</h2>
        <p>Id: {beneficiary.id}</p>
        <p>Contact: {beneficiary.contact}</p>
        <p>Gender: {beneficiary.gender}</p>
        <p>Age: {beneficiary.age}</p>
        <p>Aadhar Number: {beneficiary.Aadhar}</p> {/* Corrected to beneficiary.Aadhar */}
        <p>Current cattle count: {beneficiary.count}</p>
        <p>Total cattle sold: {beneficiary.sell}</p>
        <p>Profit Earned: {beneficiary.profit}</p>
        {/* Dropdown for special abled */}

        <button onClick={closeModal} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  closeButton: {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default BeneficiaryModal;
