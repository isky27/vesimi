import React from 'react'
import AccountController from './accountController';
import { Link } from 'react-router-dom';
import ProfileWrapper from './ProfileWrapper';

const AccountView = () => {

    const { loginDetails } = AccountController();

    return (
        <ProfileWrapper>
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
                                <h4>Default Billing Address</h4>
                                <p>Mahesh varma</p>
                                <p>Test</p>
                                <p>Jaipur, Rajasthan, 302020, india</p>
                                <p>T.445646464</p>

                                <div className="d-flex infoAction">
                                    <Link to={"/"}>Edit Address</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="InfoBlock">
                                <h4>Default Shipping Address</h4>
                                <p>Mahesh varma</p>
                                <p>Test</p>
                                <p>Jaipur, Rajasthan, 302020, india</p>
                                <p>T.445646464</p>

                                <div className="d-flex infoAction">
                                    <Link to={"/"}>Edit Address</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </ProfileWrapper>


    )
}

export default AccountView