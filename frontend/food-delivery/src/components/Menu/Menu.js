import './Menu.css'
import { menu_list } from '../../assets/assets';
const Menu = ({category, setCategory}) => {
   
    return ( 
        <div className="menu-page">
            <h2>Explore our menu</h2>
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Porro explicabo perspiciatis dicta incidunt cumque sequi. Cum sint blanditiis nemo accusantium.</p>
            <div  className="category-list">
                {menu_list.map((cate,index)=>(
                    <div onClick={()=>{
                        category === cate.menu_name?setCategory('All'):setCategory(cate.menu_name)
                    }} className="menu">
                        <img className={category === cate.menu_name?"active":""} key = {index} src={cate.menu_image} alt="" />
                        <p>{cate.menu_name}</p>
                    </div>
                ))}

            </div>


        </div>
     );
}
 
export default Menu;