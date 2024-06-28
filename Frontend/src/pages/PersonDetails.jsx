import React from 'react';
import '../PersonDetailsCSS.css';
import SearchAppBar from '@/components/ui/matbar';

export default function PersonDetails() {
  return (
      <>
      <SearchAppBar/>
    <div className="container">
      <div className="left-container">
        <div className="details-box">
          <h2 className="box-title">Volunteer Profile</h2>
          <p><strong>Name:</strong> Amit Deshmukh</p>
          <p><strong>Address:</strong> 456 MG Road, Pune, Maharashtra, India</p>
          <p><strong>Age:</strong> 35</p>
          <p><strong>Location:</strong> Pune, Maharashtra, India</p>
          <p><strong>Contact Details:</strong> +91 9876543210</p>
        </div>
        <button className="beneficiary-button">Explore Beneficiaries</button>
        <div className="next-day-details">
          <h2 className="next-day-title">Next Visit Info</h2>
          <p><strong>Source:</strong> Pune</p>
          <p className="dest"><strong>Destination:</strong> Vikaswadi</p>
          <p className="time"><strong>Time:</strong> 10 AM</p>
          <button className="notify-button">Notify</button>
        </div>
      </div>
     
    </div>
    {/* <div className="locations-box">
        <h1 className="location-title">Locations we serve </h1>
        <ul >
          <li className="places">&#8226; Vikaswadi</li>
          <li className="places">&#8226; Nalyachiwadi</li>
          <li className="places">&#8226; Mograjwadi</li>
          <li className="places">&#8226; Tembharewadi</li>
          <li className="places">&#8226; Humgaowadi</li>
          <li className="places">&#8226; Malegaowadi</li>
          <li className="places">&#8226; Vaijenath</li>
          <li className="places">&#8226; Paliwadi</li>
          <li className="places">&#8226; Shingdhol</li>
        </ul>
      </div> */}
      </>
  );
}