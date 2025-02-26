import { useEffect, useState } from 'react';
import { assets } from '../../admin_assets/assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Add.css'
const Add = () => {
    const [image,setImage] = useState(null)
    const [data,setData] = useState({
        name:"",
        price:"",
        category:"",
        description:"",
    })

    const onChangeHandler = (event)=>{
        setData(data =>({...data,[event.target.name]:event.target.value}))
    }
    const onSubmitHandler = async(event)=>{
        event.preventDefault(); 

        const formData = new FormData();

        formData.append('name',data.name)
        formData.append('price',data.price)
        formData.append('description',data.description)
        formData.append('category',data.category)
        formData.append('image',image)
        const url = 'http://localhost:3500/api/food/add';

        try {
            const resp = await fetch(url, {
                method: 'POST',
                body: formData,
            });
        
            if (!resp.ok) {
                throw new Error('Failed to upload image');
            }
        
            const result = await resp.json();
            toast.success(result.message);
        
            setData({
                name: "",
                price: "",
                category: "",
                description: "",
            });
            setImage(null);
        } catch (err) {
            toast.error('Failed to Add');
        }
        

    }

    useEffect(()=>{
        console.log(data)

    },[data])
    return ( 
        <div className="add">
            <form onSubmit={onSubmitHandler}>
                <div className="form-body">
                    <p>Upload image</p>
                    <label for = 'upload-image'>
                        <img name = 'image' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                    </label>
                    <input type="file" onChange = {(e)=>setImage(e.target.files[0]) } id='upload-image' hidden required />
                </div>

                <div className="form-body">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} className='red' type="text" name='name' required placeholder='Type here'/>
                </div>
                
                <div className="form-body">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description}  name="description" placeholder='Write Content here' rows={6} id="" required></textarea>
                </div>

                <div className="flex-style">
                    <div>
                        <p>Product category</p>
                        <select onChange={onChangeHandler} value={data.category} name="category" id="" required>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>

                    </div>
                    <div>
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" required  name='price' placeholder='$20'/> 

                    </div>
                   
                    
                </div>
                <button type='Submit' className='add-item'>ADD</button>



            </form>

        </div>
     );
}
 
export default Add;