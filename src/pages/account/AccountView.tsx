import React from 'react'
import AccountController from './accountController';
import { Link } from 'react-router-dom';
import ProfileWrapper from './ProfileWrapper';
import Loader from 'component/Loader';

const AccountView = () => {

    const {
        loginDetails,
        isLoadingUserAddress, 
        userAddressData
    } = AccountController();

    return (
        <ProfileWrapper>
            <Loader isLoading={[isLoadingUserAddress]} />
            <div className="myAccountMain">
                <h2>My Account</h2>
                <div className="infoOuter mb-4">
                    <div className="infoHead">
                        <h3>Account Information</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="InfoBlock">
                                <h4>Contact Information</h4>
                                <p>{loginDetails?.user?.name}</p>
                                <p>{loginDetails?.user?.email}</p>
                                <div className="d-flex infoAction">
                                    <Link to={"/edit-user"}>Edit</Link>
                                    <Link to={"/edit-user/passChng"}>Change Password</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="InfoBlock">
                                <h4>Newsletter</h4>
                                <p>You Aren't subscribed to our newsletter.</p>
                                <div className="d-flex infoAction">
                                    <Link to={"/"}>Edit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="infoOuter mb-4">
                    <div className="infoHead d-flex align-items-center justify-content-between">
                        <h3>Address Book</h3>
                        <Link to={"/address"}>Manage Address</Link>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="InfoBlock">
                                {userAddressData?.data?.[0] ? userAddressData?.data?.map((elem:any, ind: number)=>{
                                    return ind===0 && <>
                                    <h4>Default Address</h4>
                                    <p>{elem?.address}</p>
                                    <p>{elem?.city_name}</p>
                                    <p>{`${elem?.state_name},${elem?.country_name}, ${elem?.postal_code}`}</p>
                                    <p>{elem?.phone}</p>
                                <div className="d-flex infoAction">
                                    <Link to={userAddressData?.data?.[0] ? `/edit-address/${elem?.id}` : "/add-address" }>{userAddressData?.data?.[0] ? "Edit" : "Add"} Address</Link>
                                </div>
                                    </> }) : 
                                    <h4>You have not set a default address.</h4>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileWrapper>


    )
}

export default AccountView