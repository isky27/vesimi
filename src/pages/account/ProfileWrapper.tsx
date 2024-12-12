import React from 'react'
import { Link } from 'react-router-dom'
import "../../scss/myAccount.css";
import filterIcon from "../../assets/images/filterIcon.png";
import sidebarClose from "../../assets/images/sidebarClose.png";
const ProfileWrapper = ({ children }: any) => {

    const handleToggleSidebar = () => {
        document.body.classList.toggle("openAccountSidebar"); // Toggle the class on <body>
      };
    
      const handleCloseSidebar = () => {
        document.body.classList.remove("openAccountSidebar"); // Remove the class from <body>
      };
    
    return (
        <main className="pageMain">
            <div className="container">
                <div className="myAccountPage position-relative">
                       <button className='d-md-none filterSidebarToggle' onClick={handleToggleSidebar}> <img src={filterIcon}/></button>
                    <div className="accountSidebar">
                    <button className="sidebarClose d-md-none" onClick={handleCloseSidebar}> <img src={sidebarClose} /></button>
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