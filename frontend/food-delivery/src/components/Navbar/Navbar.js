import { Link, useNavigate } from "react-router-dom"
import{ assets } from  "../../assets/assets"
import logo from "../../assets/image copy 3.png"
import './Navbar.css'
import react, {useContext, useEffect, useState} from 'react'
import { StoreContext } from "../../context/StoreContext"
const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home")
        const { token,setToken } = useContext(StoreContext)
        const navigate = useNavigate()

        const logout = ()=>{
            localStorage.removeItem('token')
            setToken("")
            navigate('/')
        }
    
    return ( 
        <div className="nav-bar">
            <Link to = {'/'}><img className = "logo" src= {logo} alt="" /></Link>
            <ul>
                <Link class= 'link' to = {'/'}><li onClick={()=>setMenu("home")} className= {menu === "home"?"active":''}>Home</li></Link>
                <li onClick={()=>setMenu("menu")} className= {menu === "menu"?"active":''}>Menu</li>
                <li onClick={()=>setMenu("mobile-app")} className= {menu === "mobile-app"?"active":''}>Mobile app</li>
                <li onClick={()=>setMenu("contact-us")} className= {menu === "contact-us"?"active":''}>Contact us</li>
            </ul>
            <div className="right-nav">
                <img src={assets.search_icon} alt="" />
                <Link to = {'/cart'}><img src= {assets.basket_icon} alt="" /></Link>
                {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
                :<div className="profile-image">
                    <img className="user-image" src={assets.profile_icon} alt="" />
                    <ul className="action-list">
                        <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img  src={assets.logout_icon} alt="" /><p>logout</p></li>
                    </ul>
                </div>
                }
            </div>
        </div>
     );
}
 
export default Navbar;

