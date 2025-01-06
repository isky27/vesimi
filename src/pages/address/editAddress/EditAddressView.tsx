import React from 'react'
import ProfileWrapper from 'pages/account/ProfileWrapper';
import AddressFormView from '../addressForm/AddressFormView';
import { useNavigate, useParams } from 'react-router-dom';

const EditAddressView = () => {

  const navigate = useNavigate()
  const { addressId } = useParams();

  return (
    <ProfileWrapper>
      <div className="myAccountMain">
        <h2>Add Address</h2>
        <div className="col-12">
          <h4>Contact Information</h4>
        </div>
        <AddressFormView isEdit={addressId} handleAfterSuccess={()=>{navigate("/address")}} />
      </div>
    </ProfileWrapper>
  );
}

export default EditAddressView