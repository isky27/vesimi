import React from 'react'
import ProfileWrapper from 'pages/account/ProfileWrapper';
import AddressFormView from '../addressForm/AddressFormView';
import { useNavigate } from 'react-router-dom';

const EditAddressView = () => {

  const navigate = useNavigate()

  return (
    <ProfileWrapper>
      <div className="myAccountMain">
        <h2>Add Address</h2>
        <div className="col-12">
          <h4>Contact Information</h4>
        </div>
        <AddressFormView handleAfterSuccess={()=>{navigate("/address")}} />
      </div>
    </ProfileWrapper>
  );
}

export default EditAddressView