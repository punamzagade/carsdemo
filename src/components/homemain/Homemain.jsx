import React from 'react'
import "./homemain.css"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { FcGoogle } from "react-icons/fc";

export const Homemain = () => {
  return (
    <div className="navbtm">
        <div className="navbtml">          
          <div className="btmup">
            <span>A burning</span>
            <span>passion for</span>
            <span>excellence</span>
          </div>
          <div className="btmmid">
            <div className="btmmidl">
              <div className="img1"><img src="./img/car 1.jpg" className = "btmimg" alt="" /></div>
              <div className="img2"><img src="./img/car 3.jpg" className = "btmimg" alt="" /></div>
              <div className="img3"><img src="./img/car 2.jpg" className = "btmimg" alt="" /></div>
            </div>
            <div className="btmmidr">
             <span className="btmmidrt">Get auto-zoned by joinning <b>auto</b></span>
             <span className="btmmidrt"><b>chase!!</b></span>
             <span className="btmmidrt">Drive into auto chase and explore</span>
             <span className="btmmidrt"> more than <b>10000</b> cars</span>
            </div>
          </div>
          <div className="btmbtm">
           <div><button className="btmbtn1">join now</button></div>
           <div className="btmdwn">
            <div className="dwn"><FileDownloadOutlinedIcon/><span className='dwn1'>Download IOS App</span></div>
           </div>
          </div>
        </div>
        <div className="navbtmr">
          <div className="title">Create Free Account</div>
          <div className="frm">
            <div className="frmbtn">
              <div className="inp"><input className="inpp" type="text" placeholder='First & Last Name' /></div>
              <div className="inp"> <input className="inpp" type="text" placeholder='Email Address' /></div>
             <div className="inp"><input className="inpp" type="text" placeholder='Create Password' /></div>
            </div>
            <div className="plcy">
            <div className="frmplcy">
              <span>I agree with the terms & conditions of clarity</span>
            </div>
            <input className="checkbx" type="checkbox" />
            </div>
            <div className="frmbtn">
              <div >
                <button className="frmbtn1">Sign Up</button>
              </div>
              <div>
                <button className='frmbtn2'><FcGoogle size={15}/>Sign up with Google</button>
              </div>
            </div>
            <div className="sgn">
              <span className="sign">Don't have an account?<b style={{color:"#18181B"}}>Sign up</b></span>
            </div>
          </div>
        </div>
      </div>
  )
}
