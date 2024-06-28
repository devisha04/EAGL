import * as React from 'react';
import '../GoatDetails.css';

export default function GoatDetails() {
  return (
    <div className="goat-container">
      <div className="goat-box">
        <img src="https://images.pexels.com/photos/1011630/pexels-photo-1011630.jpeg?cs=srgb&dl=animal-white-young-1011630.jpg&fm=jpg" alt="Goat" className="goat-image" />
        <h2 className="goat-title">Goat Details</h2>
        <p><strong>ID:</strong> G12345</p>
        <p><strong>Breed:</strong> Boer</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Vaccines Given:</strong> Rabies, Tetanus, Clostridial</p>
        <p><strong>Date of Last Vaccination Dose:</strong> 2024-01-15</p>
        <p><strong>Insurance Validity:</strong> 2025-12-31</p>
      </div>
    </div>
  );
}