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
                            <li><Link to={"/"}>Account Dashboard</Link></li>
                            <li><Link to={"/"}>Address Book</Link></li>
                            <li><Link to={"/"}>Account Information</Link></li>
                            <li><Link to={"/"}>my Order</Link></li>
                            <li><Link to={"/"}>my Downloadable Product</Link></li>
                            <li><Link to={"/"}>Newsletter Subscriptions</Link></li>
                            <li><Link to={"/"}>Stored Payment Method</Link></li>
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