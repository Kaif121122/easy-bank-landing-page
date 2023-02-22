import React from 'react'
import phoneImg from '../images/image-mockups.png'

const Header = () => {
    return (
        <div className="header container">
            <div className="header-content">
                <h1 className="common-h1">Next generation digital banking</h1>
                <p className="common-para">
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.</p>
                <button className="btn header-btn">

                    Request Invite
                </button>
            </div>
            <div className="image-container">
            <img src={phoneImg} alt="" className="phone-img" />
            </div>
        </div>
    )
}

export default Header