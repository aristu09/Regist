import React, { useState } from "react"
import'./LoginSignup.css'

import user_icon from '../Assets/user.png'
import phone_icon from '../Assets/phone.png'
import husband_icon from '../Assets/husband.png'
import age_icon from '../Assets/age.png'
import birt_icon from '../Assets/birth.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


const LoginSignup = () => {

    const [action, setAction] = useState("Login");
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div> 
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                <img src={user_icon} alt="" srcset="" />
                <input type="text" placeholder="Name" />
            </div>}
            {action === "Sign Up" && (
                    <div className="input">
                        <img src={husband_icon} alt="" srcSet="" />
                        <input type="text" placeholder="Name Husband" />
                    </div>
                )}
            {action === "Sign Up" && (
                    <div className="input">
                        <img src={phone_icon} alt="" srcSet="" />
                        <input type="text" placeholder="Phone" />
                    </div>
                )}
            {action === "Sign Up" && (
                    <div className="input">
                        <img src={age_icon} alt="" srcSet="" />
                        <input type="text" placeholder="Age" />
                    </div>
                )}
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={birt_icon} alt="" srcSet="" />
                        <input type="date" placeholder="Date of Birth" />
                    </div>
                )}
                
            <div className="input">
                <img src={email_icon} alt="" srcset="" />
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" srcset="" />
                <input type="password" placeholder="Password"/>
            </div>
            
            <div className="forgot-password">Lost Password <span>Click Here!</span></div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
            </div>
        </div>
      );
}

export default LoginSignup