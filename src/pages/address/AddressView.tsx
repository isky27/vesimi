import React from 'react'
import AddressController from './addressController'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ProfileWrapper from '../account/ProfileWrapper';
import Loader from '../../component/Loader';
import CustomPopup from '../../component/modal/CustomPopup';

const AddressView = () => {

  const {
    isLoadingUserAddress, userAddressData,
    loginDetails,
    isOpenDeletePopup, setIsOPenDeletePopup,
    handleDeleteAddress,
    isLoadingDeleteAddress
   } = AddressController()

  return (
    <ProfileWrapper>
      <Loader isLoading={[isLoadingUserAddress, isLoadingDeleteAddress]}/>
      <div className="myAccountMain">
        <div className="container2">
          <h2 className="mb-4">Address Book</h2>

          {/* Default Addresses Section */}
          <div className="card mb-4">
            <div className="card-header">Default Addresses</div>
            <div className="card-body row">
              {/* Default Billing Address */}
              <div className="col-md-6">
                {userAddressData ? userAddressData?.data?.map((elem: any, ind:number) => {
                  return ind ===0 && <>
                    <h4>Default Address</h4>
                    <p>{elem?.address}</p>
                    <p>{elem?.city_name}</p>
                    <p>{`${elem?.state_name},${elem?.country_name}, ${elem?.postal_code}`}</p>
                    <p>{elem?.phone}</p>
                  </>
                }) :
                  <h4>You have not set a default billing address.</h4>}
              </div>
            </div>
          </div>

          {/* Additional Address Entries Section */}
         <div className="card mb-4">
            <div className="card-header">Additional Address Entries</div>
            <div className="card-body">
              <div className='tableResponsive'>
              <table className="table table-bordered table-hover myAccountTableResponsive">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Street Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>ZIP/Postal Code</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {userAddressData?.data?.map((elem:any, ind:number)=>{
                  return( 
                  <tr key={elem?.id}>
                    <td>{elem?.name || loginDetails?.user?.name}</td>
                    <td>{elem?.address}</td>
                    <td>{elem?.city_name}</td>
                    <td>{elem?.country_name}</td>
                    <td>{elem?.state_name}</td>
                    <td>{elem?.postal_code}</td>
                    <td>{elem?.phone}</td>
                    <td>
                      <Link to={`/edit-address/${elem?.id}`} className="text-primary">Edit</Link> | 
                      <Button onClick={()=>setIsOPenDeletePopup({isOpen:true, addressId : elem?.id})} className="text-danger border-0 bg-transparent p-0">Delete</Button>
                    </td>
                  </tr>)
                })}
                </tbody>
              </table>
              </div>
              <p>{userAddressData?.data?.length} Item</p>
            </div>
          </div>
          {/* Add New Address Button */}
          <Link to={"/add-address"} className="btn btn-dark">Add New Address</Link>
        </div>
      </div>
      <CustomPopup
        modalClass="loginModal"
        show={isOpenDeletePopup?.isOpen}
        modalBody="Are you sure want to delete address"
        handleClose={() => setIsOPenDeletePopup({isOpen:false, addressId : ""})}
        modalHeader="Delete address"
        secondaryButtonText="Cancel"
        secondaryButtonClick={()=>{setIsOPenDeletePopup({isOpen:false, addressId :""})}}
        primaryButtonText="Delete"
        primaryButtonClick={handleDeleteAddress}
      />
    </ProfileWrapper>
  )
}

export default AddressView