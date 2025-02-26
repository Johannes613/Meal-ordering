import './Navbar.css'
import { assets } from '../../admin_assets/assets';
const Navbar = () => {
    return ( 
        <div className="nav-bar">
            <img className='admin-logo' src={assets.logo} alt="" />
            <img className='profile' src={assets.profile_image} alt="" />

        </div>
     );
}
 
export default Navbar;