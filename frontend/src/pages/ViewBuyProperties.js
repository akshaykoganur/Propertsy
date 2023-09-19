import React from 'react';
import '../index.css'; // Import the CSS file for styling

const HostelPropertyPage = () => {

  var currentProperty = sessionStorage.getItem('cur_Property');
  var storedArray = JSON.parse(sessionStorage.getItem(currentProperty));

  return (
    <div className="hostel-page">
      <div className="hostel-info">
        <img src={storedArray.image} alt={""} className="hostel-image" />
        <div className="hostel-details">
          <h2 className="hostel-name">{storedArray.name}</h2>
          <h2 className="hostel-name">{storedArray.type}</h2>
          
          <div className="detail-item">
            <strong>Price: </strong> {storedArray.price}
          </div>
          <div className="detail-item">
            <strong>Address:</strong> {storedArray.street}, {storedArray.locality}, {storedArray.city}
          </div>
          <div className="detail-item">
            <strong>Contact Name:</strong> {storedArray.ownerName} 
            <br/>
            <strong>Contact Number:</strong> {storedArray.ownerContact}
          </div>
          <button>Contact Owner</button>
        </div>
      </div>
    </div>
  );
};

export default HostelPropertyPage;
