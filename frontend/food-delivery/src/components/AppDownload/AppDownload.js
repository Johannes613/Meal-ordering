import './AppDownload.css'
import { assets } from '../../assets/assets';
const AppDownload = () => {
    return ( 
        <div className="app-download">
            <h1>For Better Experiance Download <br />Flavour App</h1>
            <div className="app-logo">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>

        </div>
     );
}
 
export default AppDownload;
