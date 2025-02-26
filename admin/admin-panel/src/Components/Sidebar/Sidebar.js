import { NavLink } from 'react-router-dom';
import { assets } from '../../admin_assets/assets';
import './Sidebar.css'
const Sidebar = () => {
    return ( 
        <div className="side-bar">
            <div className="options">
                <NavLink to='/add' className='each-option'>
                    <img src={assets.add_icon} alt=""/>
                    <p>Add Items</p>
                </NavLink>
                <NavLink to = '/list' className='each-option'>
                    <img src={assets.order_icon} alt=""/>
                    <p>List Items</p>
                </NavLink>
                <NavLink to= '/orders' className='each-option'>
                    <img src={assets.order_icon} alt=""/>
                    <p>Orders</p>
                </NavLink>
            </div>


        </div>
     );
}
 
export default Sidebar;