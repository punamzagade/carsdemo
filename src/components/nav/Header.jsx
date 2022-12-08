
import { Link, NavLink } from "react-router-dom";
import "./header.css";
// import { Facebook } from '@material-ui/icons';
import { GiHamburgerMenu} from "react-icons/gi";
import { useState } from "react";

const Header = () => {
window.addEventListener("scroll",function(){
  var navb=this.document.querySelector(".navbar");
  navb.classList.toggle("sticky",this.window.scrollY > 0);
})

const [showham,setShowham]=useState(false);

  return (
    <div className="navbar">
    <div className='nav'>
      <div className="navleft">
        <h4>/AUTO CHASE</h4>
      </div>
      <div className="navright">
        <ul className="navlist">
          <li className="navmenu">
            <NavLink to="/newcars" style={{color:"#18181B",textDecoration:"none"}}>New cars</NavLink>
            <span className='line'>|</span>
          </li>
          <li className="navmenu">
            <NavLink to="/usedcars" style={{color:"#18181B",textDecoration:"none"}}>used cars</NavLink>
            <span className='line'>|</span>
          </li>
          <li className="navmenu">
            <NavLink to="/groups" style={{color:"#18181B",textDecoration:"none"}}>Community Groups</NavLink>
            <span className='line'>|</span>
          </li>
          <li className="navmenu">
            <NavLink to="/about" style={{color:"#18181B",textDecoration:"none"}}>About</NavLink>
            <span className='line'>|</span>
          </li>
          <li className="navmenu">
            <NavLink to="/login" style={{color:"#18181B",textDecoration:"none"}}>Login</NavLink>
          </li>
          <li className="navmenu">
            <NavLink to="/login"><button className='create'>Create free account</button></NavLink>
          </li>
        </ul>
        {/* <div className="ham">
          <Link onClick={()=>setShowham(!showham)}>
          <GiHamburgerMenu/>
          </Link>
        </div> */}
      </div>
    </div>
   
    </div>
  )
}

export default Header