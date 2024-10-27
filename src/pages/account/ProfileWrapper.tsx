import React from 'react'
import { Link } from 'react-router-dom'
import "../../scss/myAccount.css";

const ProfileWrapper = ({ children }: any) => {
    return (
        <main className="pageMain">
            <div className="container">
                <div className="myAccountPage">
                    <div className="accountSidebar">
                        <h1>Account Dashboard</h1>
                        <ul className="sidebarNav">
                            <li><Link to={"/account"}>Account Dashboard</Link></li>
                            <li><Link to={"/address"}>Address Book</Link></li>
                            <li><Link to={"/"}>My Order</Link></li>
                            <li><Link to={"/"}>My Product Review</Link></li>
                        </ul>
                    </div>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default ProfileWrapper